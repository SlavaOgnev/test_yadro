import React from 'react';
import Mybutton from "./UI/button/Mybutton";
import { useNavigate} from "react-router-dom";

const Postitem = (props) => {
    const router = useNavigate();
    return (
        <div className={'post'}>
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title} </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <Mybutton onClick={()=>props.removePost(props.post)}>Delete</Mybutton>
                <Mybutton style={{marginLeft: 10}} onClick={()=>router(`/posts/${props.post.id}`)} >Открыть</Mybutton>
            </div>
        </div>
    );
};

export default Postitem;