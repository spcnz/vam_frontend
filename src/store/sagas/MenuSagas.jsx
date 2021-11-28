import { call, put } from 'redux-saga/effects';

import MenuService from '../../services/MenuService';
import { setMenu } from '../actions/MenuActions';

export function* getMenu({ payload }) {
  try {
    console.log('Iz sage!');
    const data = yield call(MenuService.getOne, payload);
    yield put(setMenu(data));
  } catch (error) {
      //ovo izmeniti!!
  }
}