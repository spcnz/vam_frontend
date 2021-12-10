import { 
  ADD_TO_ORDER, 
  DECREASE_QUANTITY, 
  DISCARD_ORDER, 
  INCREASE_QUANTITY, 
  ORDER_REQUEST_FAILED, 
  REMOVE_PRODUCT, 
  UPDATE_QUANTITY } from '../actions/ActionTypes';

const initialState = {
    // products : JSON.parse(localStorage.getItem('order'))?.products || [],
    // total:  JSON.parse(localStorage.getItem('order'))?.total || 0,
    error: null,
    success: null
  };

const orderReducer = (state = initialState, action) => {
  let newState = null;
  let productsChanged = [];

  switch (action.type) {
    case DISCARD_ORDER:
      discardOrder();
      return {...initialState, success: true };
    case ORDER_REQUEST_FAILED:
        return {...state, error: action.payload }
    default:
      return state;
  }
};

const calcTotal = products => {
  return products.reduce((res,item) => res + item.price * item.quantity ,0)
}

const saveOrder = order => {
  localStorage.setItem('order', JSON.stringify(order));
}

const discardOrder = () => {
  localStorage.removeItem('order');
}


export default orderReducer;

