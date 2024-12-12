import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import Mybutton from "./UI/button/Mybutton";
import PostList from "./PostList";

const PostForm = ({create}) => {
    const [post, setPost] = React.useState({title:'',body:''})

    const addNewPost = (e)=>{
        e.preventDefault();
        const newPost = {
            ...post, id:Date.now(),
        }
        setPost({title:'',body:''});
        create(newPost);
    }
    return (
        <div>
            <form>
                <MyInput type='text' placeholder='Название поста' value={post.title}
                         onChange={(e) => setPost({title:e.target.value})}/>
                <MyInput type='text' placeholder='Описание поста' value={post.body}
                         onChange={(e) => setPost({...post, body: e.target.value})}></MyInput>
                <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
            </form>


        </div>
    );
};

export default PostForm;