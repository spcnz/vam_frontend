import { DISCARD_ORDER, ORDER_REQUEST_FAILED } from '../actions/ActionTypes';

const initialState = {
    error: null,
    success: null
  };

const orderReducer = (state = initialState, action) => {

  switch (action.type) {
    case DISCARD_ORDER:
      discardOrder();
      console.log('heree')
      return {...initialState, success: true };
    case ORDER_REQUEST_FAILED:
        return {...state, error: action.payload }
    default:
      return state;
  }
};

const discardOrder = () => {
  localStorage.removeItem('order');
}

export default orderReducer;