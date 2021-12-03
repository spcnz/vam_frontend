import { call, put } from 'redux-saga/effects';

import OrderService from '../../services/OrderService';
import { discardOrder, orderRequestFailed } from '../actions/OrderActions';

export function* createOrder({ payload }) {
  try {
    const data = yield call(OrderService.create, payload);
    yield put(discardOrder());
  } catch (error) {
    yield put(orderRequestFailed(true))
  }
}