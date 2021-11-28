import { SET_MENU } from '../actions/ActionTypes';

const initialState = {
    info: null
  };

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {...state, info: action.payload }
    default:
      return state;
  }
};

export default menuReducer;

