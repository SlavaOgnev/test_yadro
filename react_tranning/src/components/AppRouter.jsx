import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Erorr from "../pages/Erorr";
import PostPage from "../pages/PostPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="posts" element={<Posts />}/>
            <Route path="/" element={<About />}/>
            <Route  path="about" element={<About />}/>
            <Route  path="posts/:id" element={<PostPage />}/>
            <Route path="*" element={<Erorr />}/>
        </Routes>
    );
};

export default AppRouter;