import { MENU_REQUEST_FAILED, SET_MENU } from '../actions/ActionTypes';

const initialState = {
    info: { categories: [] },
    error: null
  };

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      saveFacilityName(action.payload.facilityName);

      return {...state, info: action.payload, error: null}
    case MENU_REQUEST_FAILED:
      return {...state, error: action.payload }
    default:
      return state;
  }
};

const saveFacilityName = name => {
  const facility = JSON.parse(localStorage.getItem('facility')) || {};
  localStorage.setItem('facility', JSON.stringify({...facility, name}));
}

export default menuReducer;

