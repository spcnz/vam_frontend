import { MENU_REQUEST_FAILED, SET_MENU } from '../actions/ActionTypes';

const initialState = {
    info: { categories: [] },
    facilityName: localStorage.getItem('facility') || "",
    error: null
  };

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      saveFacility(action.payload.facilityName, action.payload.facility);

      return {...state, info: action.payload, error: null}
    case MENU_REQUEST_FAILED:
      return {...state, error: action.payload }
    default:
      return state;
  }
};

const saveFacility = (name, id) => {
  localStorage.setItem('facility', name);
  localStorage.setItem('facilityId', id);
}

export default menuReducer;

