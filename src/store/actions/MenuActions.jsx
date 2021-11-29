import { GET_MENU, SET_MENU } from './ActionTypes';

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