import React from 'react';
import Postitem from "./postitem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, removePost}) => {
    if(posts.length === 0) {
        return (
            <h1 style={{textAlign:'center'}}>Посты не найдены</h1>

        )
    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup>
            {posts.map((post, index) => (
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    className="post"
                >
                <Postitem removePost={removePost} number={index+1} post={post} key={post.id}/>
                </CSSTransition>
            ))}
            </TransitionGroup>

        </div>
    );
};

export default PostList;