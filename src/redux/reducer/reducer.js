import {
  ADD_TODO,
  GET_ALL_TODOS,
  UPDATE_TODO,
  UPDATE_STATUS,
} from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_TODOS:
      console.log("Get all todos");
      return state;
    case ADD_TODO:
      return [...state, action.payload.todo];
    case UPDATE_STATUS:
      let todos = state.map((todo) => {
        let todoItem = todo;
        if (todo.id === action.payload) {
          todoItem.status = 2;
        }
        return todoItem;
      });
      return todos;
    default:
      return state;
  }
}
