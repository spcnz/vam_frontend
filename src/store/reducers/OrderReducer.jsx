import { DISCARD_ORDER, ORDER_REQUEST_FAILED, SET_ORDER_ID, SET_ORDER, SET_ORDERS, NEW_NOTIFICATION, UPDATED_STATUS } from '../actions/ActionTypes';

import { calcTotal } from "../../utils";
import { RECEIVED } from "../../orderStatus";

const initialState = {
    error: null,
    success: null,
    id: localStorage.getItem('id'),
    ordered: null,
    all: [],
    status: RECEIVED
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
      console.log('ja pozvana? ')
        const ordObj = transformData(action.payload);

        return {...state, ordered : ordObj };
    case SET_ORDERS:
        const orders = action.payload.results.map(order => transformOrder(order));

        return {...state, all : orders};
    case NEW_NOTIFICATION:
        const newOrder = transformOrder(action.payload)

        return {...state, all : [newOrder,...state.all]};
    case UPDATED_STATUS:
        const { status } = action.payload;
          
        return {...state, status };
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

const transformOrder = order => 
    ({
      id: order.id,
      date: order.date,
      table: order.table_order,
      waiter: order.waiter_assigned,
      items: order.order_items,
      status: order.status
    })

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