import { GET_MENU, MENU_REQUEST_FAILED, SET_MENU } from './ActionTypes';

export const getMenu = payload => {
  return {
    type: GET_MENU,
    payload
  };
};

export const setMenu = payload => {
    return {
      type: SET_MENU,
      payload
    };
};

export const menuRequestFailed = payload => {
  return {
    type: MENU_REQUEST_FAILED,
    payload
  };
};