import { ADD_TO_ORDER } from './ActionTypes';

export const addToOrder = payload => {
  return {
    type: ADD_TO_ORDER,
    payload
  };
};