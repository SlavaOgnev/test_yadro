import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostPage = () => {
    const params = useParams();
    const [posts, setPosts] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error]=useFetching(async ()=>{
        const response =await  PostService.getPostById(params.id);
        setPosts(response.data)
    })
    const [fetchCommentById, isCommentLoading, CommentError]=useFetching(async ()=>{
        const response =await  PostService.getCommentByPostId(params.id);
        setComments(response.data)
    })

    useEffect(()=>{
        fetchPostById(params.id);
        fetchCommentById(params.id);
    },[])

    return (
        <div>
            <h1>
                Вы попали на страницу поста c ID = {params.id}
            </h1>
            <div>
                {isLoading ? <Loader></Loader> : <div> {posts.id}. {posts.title}</div>}
            </div>
            <h1>
                Комментарии
            </h1>
            {isLoading ? <Loader></Loader>
                : <div>
                    {comments.map((comment, index) => (
                        <div key={index}>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    ))}
                </div>}
        </div>
    );
};

export default PostPage;