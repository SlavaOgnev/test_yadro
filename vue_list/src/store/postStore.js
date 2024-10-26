import axios from "axios";

export const postStore = {
    state: () =>({
        count:0,
        posts:[],
        isPostloading: true,
        page:1,
        limit:10,
        totalPages:0,
        selectedSort:'',
        searchQuery:'',
        sortOptions:[
            {value:'title', name:"По навзанию"},
            {value:'body', name:"По описанию"}
        ],
    }),
    getters: {
        sortPosts(state) {
            return state.posts.sort((post1, post2) => {
                return  post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]);
            });
        },
        sortAndSearch(state, getters) {
            return getters.sortPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        }

    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setIsPostloading(state, isPostloading) {
            state.isPostloading = isPostloading;
        },

        setCount(state, count) {
            state.count = count;
        },
        setPage(state, page) {
            state.page = page;
        },
        setTotalPage(state, totalPage) {
            state.totalPages = totalPage;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },


    },
    actions: {

        async fetchPost({state, commit}) {
            try{
                commit("setIsPostloading", true);

                setTimeout(async ()=>{
                    let response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                        params:{
                            _page:state.page,
                            _limit:state.limit,
                        }
                    });
                    commit("setTotalPage", Math.ceil(response.headers['x-total-count']/ state.limit));

                    commit("setPosts",response.data);
                    commit("setIsPostloading", false);
                }, 500)

            } catch(e){
                alert("Ошибка запроса")
            }

        },
        async loadPost({state, commit}) {
            try{
                commit("setPage", state.page+1)
                setTimeout(async ()=>{
                    let response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                        params:{
                            _page:state.page,
                            _limit:state.limit,
                        }
                    });
                    commit("setTotalPage", Math.ceil(response.headers['x-total-count']/ state.limit));



                    commit('setPosts', [...state.posts, ...response.data]);
                    commit("setIsPostloading", false);
                }, 500)

            } catch(e){
                alert("Ошибка запроса")
            }

        }

    },
    namespaced: true,
}