import { CONFIRM_ORDER, DISCARD_ORDER, GET_ORDER, ORDER_REQUEST_FAILED, SET_ORDER, SET_ORDER_ID } from './ActionTypes';

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