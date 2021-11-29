import { GET_MENU, MENU_REQUEST_FAILED, SET_MENU } from './ActionTypes';

export const getMenu = () => {
  return {
    type: GET_MENU
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