export const ADD_TODO = "ADD_TODO";
export const GET_ALL_TODOS = "GET_ALL_TODOS";
export const UPDATE_TODO = "UPDATE_TODO";

export const getAllTodos = () => ({
    type: GET_ALL_TODOS,
    payload: {}
});

export const updateProduct = (todo) => ({
    type: ADD_TODO,
    payload: { todo }
});