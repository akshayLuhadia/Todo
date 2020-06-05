export const ADD_TODO = "ADD_TODO";
export const GET_ALL_TODOS = "GET_ALL_TODOS";
export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const CLEAR_TASK = "CLEAR_TASK";

export const getAllTodos = () => ({
  type: GET_ALL_TODOS,
  payload: {},
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: { todo },
});

export const updateStatus = (id) => ({
  type: UPDATE_STATUS,
  payload: id,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const clearTasks = () => ({
  type: CLEAR_TASK,
});
