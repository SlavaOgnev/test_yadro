import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {EditPage, ListPage, DetailPage} from "./pages";
import MainLayout from "./Components/MainLayout";
import "./App.css";
const App = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<ListPage />} />
                    <Route path="/detail/:id" element={<DetailPage />}>
                        <Route path="edit" element={<EditPage />} />
                    </Route>
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default App;
