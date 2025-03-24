export const getStoredUser = (id) => {
    return JSON.parse(localStorage.getItem(`user_${id}`)) || {};
};