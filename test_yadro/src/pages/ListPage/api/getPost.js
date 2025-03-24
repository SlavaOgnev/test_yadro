import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchPosts = async (page = 1, limit = 3) => {
    try {
        const response = await axios.get(API_URL, {
            params: { _page: page, _limit: limit },
        });
        return { data: response.data, total: parseInt(response.headers["x-total-count"], 10) };
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        return { data: [], total: 0 };
    }
};