import { call, put } from 'redux-saga/effects';

import MenuService from '../../services/MenuService';
import { menuRequestFailed, setMenu } from '../actions/MenuActions';

export function* getMenu({ payload }) {
  try {
    const data = yield call(MenuService.getOne, payload);
    yield put(setMenu(data));
  } catch (error) {
    yield put(menuRequestFailed(true))
  }
}