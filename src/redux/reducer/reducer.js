import { ADD_TODO, GET_ALL_TODOS, UPDATE_TODO } from '../actions';


export default function (state = [1,2,3,4], action) {
    switch (action.type) {
        case GET_ALL_TODOS:
            console.log("Get all todos");
            return state;
        case ADD_TODO:
           console.log("Add todo");
           return state;
        default:
            return state;
    }
}
