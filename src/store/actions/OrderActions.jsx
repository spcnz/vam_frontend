import { ADD_TO_ORDER, CONFIRM_ORDER, DECREASE_QUANTITY, DISCARD_ORDER, INCREASE_QUANTITY, ORDER_REQUEST_FAILED, REMOVE_PRODUCT } from './ActionTypes';

export const addToOrder = payload => {
  return {
    type: ADD_TO_ORDER,
    payload
  };
};

export const increaseQuantity = payload => {
  return {
    type: INCREASE_QUANTITY,
    payload
  };
};

export const decreaseQuantity = payload => {
  return {
    type: DECREASE_QUANTITY,
    payload
  };
};

export const removeProduct = payload => {
  return {
    type: REMOVE_PRODUCT,
    payload
  };
};

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