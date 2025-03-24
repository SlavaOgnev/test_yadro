import React, {createContext, useEffect, useState} from "react";
import { List, Pagination } from "antd";
import { fetchPosts } from "./api/getPost";
import {ListItem} from "./ui/ListItem";
import {CustomSpin} from "../../Shared/ui/CustomSpin/CustomSpin";


export const CardContentContext = createContext(null)
export const ListPage = () => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    useEffect(() => {
        const loadPosts = async () => {
            const { data, total } = await fetchPosts(currentPage, pageSize);
            setItems(data);
            setTotal(total);
        };

        loadPosts();
    }, [currentPage]);
    if (!items.length) {
        return (
            <CustomSpin/>
        )
    }

    return (
        <div>
            <List
                bordered
                dataSource={items}
                renderItem={(item) => (<ListItem item={item} />)}
            />
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={total}
                onChange={(page) => setCurrentPage(page)}
                style={{ marginTop: "20px", textAlign: "center" }}
            />
        </div>
    );
};
