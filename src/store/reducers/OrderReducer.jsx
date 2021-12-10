import { DISCARD_ORDER, ORDER_REQUEST_FAILED, SET_ORDER_ID, SET_ORDER } from '../actions/ActionTypes';

import { calcTotal } from "../../utils";

const initialState = {
    error: null,
    success: null,
    id: localStorage.getItem('id'),
    ordered: null
  };

const orderReducer = (state = initialState, action) => {

  switch (action.type) {
    case DISCARD_ORDER:
      discardOrder();
      return {...initialState, success: true };
    case ORDER_REQUEST_FAILED:
        return {...state, error: action.payload };
    case SET_ORDER_ID:
        saveOrderId(action.payload);
        
        return { error: null, success: true, id: action.payload };
    case SET_ORDER:
        const ordObj = transformData(action.payload);

        return {...state, ordered : ordObj };
    default:
      return state;
  }
};

const discardOrder = () => {
  localStorage.removeItem('order');
}

const saveOrderId = id => {
  localStorage.setItem('id', id);
}

const transformData = order => {
  const all = order.order_items.map(item => {
    const obj = {...item, quantity: item.amount}
    delete obj['amount']
    return obj
  })

  return {
    id: order.id,
    all,
    total : calcTotal(all)
  }
}

export default orderReducer;