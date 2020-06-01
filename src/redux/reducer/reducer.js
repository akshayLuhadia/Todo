import {
  ADD_TODO,
  GET_ALL_TODOS,
  UPDATE_TODO,
  UPDATE_STATUS,
  CLEAR_TASK,
} from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_TODOS:
      console.log("Get all todos");
      return state;
    case ADD_TODO:
      return [...state, action.payload.todo];
    case UPDATE_STATUS:
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          status: 2,
        };
      });
    case UPDATE_TODO:
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...action.payload,
        };
      });
    case CLEAR_TASK:
      return state.filter((item) => {
        return item.status !== 2;
      });
    default:
      return state;
  }
}
