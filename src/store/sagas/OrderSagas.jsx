import { call, put } from 'redux-saga/effects';

import OrderService from '../../services/OrderService';
import { discardOrder, orderRequestFailed, setOrder, setOrderId } from '../actions/OrderActions';

export function* createOrder({ payload }) {
  try {
    const data = yield call(OrderService.create, payload);
    yield put(discardOrder());
    yield put(setOrderId(data.id));
  } catch (error) {
    yield put(orderRequestFailed(true))
  }
}

export function* orderGet({ payload }) {
  try {
    const data = yield call(OrderService.getOne, payload);
    yield put(setOrder(data));
  } catch (error) {
    yield put(orderRequestFailed(true))
  }
}