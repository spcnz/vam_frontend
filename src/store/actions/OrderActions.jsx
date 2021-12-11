import { CONFIRM_ORDER, DISCARD_ORDER, GET_ORDER, GET_ORDERS, NEW_NOTIFICATION, OPEN_CUSTOMER_WS, OPEN_WAITER_WS, ORDER_REQUEST_FAILED, SET_ORDER, SET_ORDERS, SET_ORDER_ID, UPDATE_STATUS } from './ActionTypes';

export const confirmOrder = payload => {
  return {
    type: CONFIRM_ORDER,
    payload
  };
};

export const discardOrder = payload => {
  return {
    type: DISCARD_ORDER,
    payload
  };
};

export const orderRequestFailed = payload => {
  return {
    type: ORDER_REQUEST_FAILED,
    payload
  };
};

export const setOrderId = payload => {
  return {
    type: SET_ORDER_ID,
    payload
  };
};

export const getOrder = payload => {
  return {
    type: GET_ORDER,
    payload
  };
};

export const setOrder = payload => {
  return {
    type: SET_ORDER,
    payload
  };
};

export const openWaiterWs = payload => {
  return {
    type: OPEN_WAITER_WS,
    payload
  };
};

export const updateStatus = payload => {
  console.log(payload)
  return {
    type: UPDATE_STATUS,
    payload
  };
};

export const openCustomerWs = payload => {
  return {
    type: OPEN_CUSTOMER_WS,
    payload
  };
};

export const getAllOrder = payload => {
  return {
    type: GET_ORDERS,
    payload
  };
};

export const setOrders = payload => {
  return {
    type: SET_ORDERS,
    payload
  };
};

export const orderArrived = payload => {
  return {
    type: NEW_NOTIFICATION,
    payload
  };
};