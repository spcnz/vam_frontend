import { call, put } from 'redux-saga/effects';

import OrderService from '../../services/OrderService';
import WaiterSocketService from '../../services/WaiterSocketService';
import CustomerSocketService from '../../services/CustomerSocketService';
import { discardOrder, orderRequestFailed, setOrder, setOrderId, setOrders } from '../actions/OrderActions';

import store from "../../store";

export function* createOrder({ payload }) {
  try {
    const data = yield call(OrderService.create, payload);
    yield put(discardOrder());
    yield put(setOrderId(data.id));
    yield call(OrderService.openCustomerConnection, data.id);
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

export function* openWaiterWs({ payload }) {
  try {
    yield call(WaiterSocketService.connect, payload, store);
  } catch (error) {
    //nesto heh
  }
}

export function* openCustomerWs({ payload }) {
  try {
    console.log('tuusam')
    yield call(CustomerSocketService.connect, payload, store);
  } catch (error) {
    //nesto heh
  }
}

export function* updateStatus({ payload }) {
  try {
    console.log(payload)
    const { data } = yield call(OrderService.updateStatus, payload);
    console.log(data);
  } catch (error) {
    //nesto heh
  }
}

export function* getAllOrders({ payload }) {
  try {
    const data = yield call(OrderService.getAll, payload);
    yield put(setOrders(data));
  } catch (error) {
    //nesto heh
  }
}