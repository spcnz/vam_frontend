import { CONFIRM_ORDER, DISCARD_ORDER, ORDER_REQUEST_FAILED} from './ActionTypes';

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