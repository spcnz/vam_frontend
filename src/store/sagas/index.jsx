import { all, takeLatest } from 'redux-saga/effects';

import { GET_MENU } from '../actions/ActionTypes';
import { getMenu } from './MenuSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(GET_MENU, getMenu)
  ]);
}