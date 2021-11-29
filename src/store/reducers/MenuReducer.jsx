import { MENU_REQUEST_FAILED, SET_MENU } from '../actions/ActionTypes';

const initialState = {
    info: { categories: [] },
    error: null
  };

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {...state, info: action.payload, error: null}
    case MENU_REQUEST_FAILED:
      return {...state, error: action.payload }
    default:
      return state;
  }
};

export default menuReducer;

