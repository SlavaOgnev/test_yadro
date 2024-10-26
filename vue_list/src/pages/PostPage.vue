<template>
  <div >
    <h1>Сраница с постами</h1>
    <my-input
        v-model="searchQuery"
        type="text"/>
    <div class="buutns">
      <my-buttom @click='showDialog' >Создать пост</my-buttom>
      <my-dialog v-model:show ='dialogVisibility'>
        <post-form
            @create="createPost"
        />
      </my-dialog>

      <my-select v-model="selectedSort"
                 :options="sortOptions"/>
    </div>
    <post-list
        v-if="!isPostloading"
        @deleteItem ="deleteItem"
        :posts="sortAndSearch"/>
    <div v-else="isPostloading" class="loader"> </div>
        <my-page :total-pages="totalPages"
          :page="page" @changePage="changePage"
          ></my-page>/
<!--    <div v-intersection="loadPost" class="observed" ref="observed"></div>-->
  </div>


</template>

<script>
import postForm from "@/components/postForm.vue"
import postList from "@/components/postList.vue"
import axios from "axios";
import MyInput from "@/components/UI/myInput.vue";

export default{
  components:{
    MyInput,
    postForm, postList,
  },
  data(){
    return{
      //модели
      count:0,
      posts:[],
      dialogVisibility: false,
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

    }
  },
  //методы
  methods:{
    createPost(post){
      this.posts.unshift(post)
      this.dialogVisibility =false
    },
    deleteItem(post){
      this.posts = this.posts.filter(p => post.id != p.id)
    },
    showDialog(){
      this.dialogVisibility = true;
    },
    async fetchPost(){
      try{
        this.isPostloading = true;
        setTimeout(async ()=>{
          let response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
              _page:this.page,
              _limit:this.limit,
            }
          });
          this.totalPages=Math.ceil( response.headers['x-total-count']/ this.limit)


          this.posts = response.data;
          this.isPostloading = false;
        }, 500)

      } catch(e){
        alert("Ошибка запроса")
      }

    },
    async loadPost(){
      try{
        this.page+=1;
        setTimeout(async ()=>{
          let response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
              _page:this.page,
              _limit:this.limit,
            }
          });
          this.totalPages=Math.ceil( response.headers['x-total-count']/ this.limit)


          this.posts = [...this.posts, ...response.data];
          this.isPostloading = false;
        }, 500)

      } catch(e){
        alert("Ошибка запроса")
      }

    },
    changePage(pageNumber){
      this.page = pageNumber;
      this.fetchPost()
    }
  },
  mounted(){
    this.fetchPost();
  },
  computed: {
    sortPosts() {
      return [...this.posts].sort((post1, post2) => {
        return  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      });
    },
    sortAndSearch() {
      return this.sortPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },

  watch:{

  }

}
</script>

<style>

.loader{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader::before {
  content: "";
  width: 30px;
  height: 30px;
  border: 5px solid teal;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin{
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
.buutns{
  margin-top: 15px;
  display: flex;
  justify-content: space-around   ;
  width: 100%;
}
</style>
