import { all, takeLatest } from 'redux-saga/effects';

import { CONFIRM_ORDER, GET_MENU, GET_ORDER, GET_ORDERS, OPEN_CUSTOMER_WS, OPEN_WAITER_WS, UPDATE_STATUS } from '../actions/ActionTypes';
import { getMenu } from './MenuSagas';
import { createOrder, getAllOrders, openCustomerWs, openWaiterWs, orderGet, updateStatus } from './OrderSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(GET_MENU, getMenu),
    takeLatest(CONFIRM_ORDER, createOrder),
    takeLatest(GET_ORDER, orderGet),
    takeLatest(OPEN_WAITER_WS, openWaiterWs),
    takeLatest(OPEN_CUSTOMER_WS, openCustomerWs),
    takeLatest(UPDATE_STATUS, updateStatus),
    takeLatest(GET_ORDERS, getAllOrders)
  ]);
}