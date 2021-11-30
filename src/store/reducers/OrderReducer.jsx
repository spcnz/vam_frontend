import { ADD_TO_ORDER } from '../actions/ActionTypes';

const initialState = {
    products : [],
    total: 0
  };

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ORDER:
      return {...state, 
        products: [...state.products, action.payload], 
        total: state.total + (action.payload.price * action.payload.quantity) 
      }
    default:
      return state;
  }
};

export default orderReducer;

