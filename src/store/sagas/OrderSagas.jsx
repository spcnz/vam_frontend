import { call, put } from 'redux-saga/effects';

import OrderService from '../../services/OrderService';
import { discardOrder, orderRequestFailed } from '../actions/OrderActions';

export function* createOrder({ payload }) {
  try {
    console.log('u sagiii')
    const data = yield call(OrderService.create, payload);
    yield put(discardOrder());
  } catch (error) {
    console.log(error)
    yield put(orderRequestFailed(true))
  }
}