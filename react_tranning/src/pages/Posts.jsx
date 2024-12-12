import React, {useEffect, useState} from 'react';
import {usePost} from "../hooks/usePost";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../components/utils/pages";
import Mybutton from "../components/UI/button/Mybutton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/postForm";
import Postfilter from "../components/Postfilter";
import PostList from "../components/PostList";
import MyPagination from "../components/UI/pagination/MyPagination";
import Loader from "../components/UI/Loader/Loader";

function Posts() {

    const [posts , setPosts] = useState([]);
    const [filter, setFilter] = useState({sort:'',search:''});
    const [modal, setModal] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchPost = usePost(posts, filter.sort, filter.search);

    const [fetchposts, isPostLoading, error] = useFetching( async ()=>{
        const response = await PostService.getAllPosts(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count'];
        setTotalPage(getPageCount(totalCount,limit));
    })


    useEffect(() => {
        fetchposts();
    },[page])



    const createPost = (newPost) =>{
        setPosts([...posts,newPost]);
        console.log(posts);
        setModal(false);
    }
    const removePost = (post) =>{
        setPosts(posts.filter(el => el.id !== post.id));
    }

    return (
        <div className="App">
            <Mybutton stye={{marginRight: 30}} onClick={fetchposts}>GEt POSTS</Mybutton>
            <Mybutton style={{marginTop:30}} onClick={()=>setModal(true)} >Сделать новый пост</Mybutton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create ={createPost}></PostForm>
            </MyModal>

            <hr style={{margin:'15px'}}></hr>
            <Postfilter filter={filter} setFilter={setFilter}></Postfilter>
            {error &&
                <h1> Произошла ошибка ${error}</h1>
            }
            {isPostLoading
                ? <div style={{display:'flex', justifyContent:'center', marginTop:50}} ><Loader></Loader></div>
                : <PostList posts={sortedAndSearchPost} removePost={removePost} title={'Lists of Posts'}/>
            }
            <MyPagination page={page} totalPage={totalPage} setPage={setPage}> hello</MyPagination>

        </div>

    );
}

export default Posts;
