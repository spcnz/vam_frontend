import { ADD_TO_ORDER, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_PRODUCT } from './ActionTypes';

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
  console.log('here action')
  return {
    type: REMOVE_PRODUCT,
    payload
  };
};