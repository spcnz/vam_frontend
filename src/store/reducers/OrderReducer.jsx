import { ADD_TO_ORDER } from '../actions/ActionTypes';

const initialState = {
    products : JSON.parse(localStorage.getItem('order')).products || [],
    total:  JSON.parse(localStorage.getItem('order')).total || 0 
  };

const orderReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_TO_ORDER:
      const newState = {
        ...state, 
        products: [...state.products, action.payload], 
        total: state.total + (action.payload.price * action.payload.quantity) 
      }
      localStorage.setItem('order', JSON.stringify(newState));

      return newState;
    default:
      return state;
  }
};

export default orderReducer;

