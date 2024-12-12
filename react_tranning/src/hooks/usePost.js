import { useMemo } from "react";

export const useSortPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        } else {
            return posts;
        }
    }, [sort, posts]);
    return sortedPosts;
};

export const usePost = (posts, sort, search) => {
    const sortedPosts = useSortPosts(posts, sort);
    const sortedAndSearchPost = useMemo(() => {
        return sortedPosts.filter(post =>
            post.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, sortedPosts]);
    return sortedAndSearchPost;
};