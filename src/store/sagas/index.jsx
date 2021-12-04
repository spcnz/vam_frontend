import { all, takeLatest } from 'redux-saga/effects';

import { CONFIRM_ORDER, GET_MENU } from '../actions/ActionTypes';
import { getMenu } from './MenuSagas';
import { createOrder } from './OrderSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(GET_MENU, getMenu),
    takeLatest(CONFIRM_ORDER, createOrder)
  ]);
}