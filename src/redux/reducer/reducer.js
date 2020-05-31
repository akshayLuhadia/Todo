import { ADD_TODO, GET_ALL_TODOS, UPDATE_TODO } from '../actions';


export default function (state = [], action) {
    switch (action.type) {
        case GET_ALL_TODOS:
            console.log("Get all todos");
            return state;
        case ADD_TODO:
           console.log("Add todo");
           let state = [...state];
           state.push(action.payload);
           return state;
        default:
            return state;
    }
}
