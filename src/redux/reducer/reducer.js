import { ADD_TODO, GET_ALL_TODOS, UPDATE_TODO } from '../actions/types';


export default function (state = [], action) {
    switch (action.type) {
        case GET_ALL_TODOS:
            return {
                ...state,
                products: productsData
            }
        case ADD_TODO:
            return {
                ...state,
                products: state.products.map((item) => {
                    if (item.id === action.payload.product.id) {
                        return action.payload.product;
                    }
                    else {
                        return item;
                    }
                })
            }
        default:
            return state;
    }
}
