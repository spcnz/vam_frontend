import { SET_FACILITY_INFO } from '../actions/ActionTypes';

const initialState = {
    name: JSON.parse(localStorage.getItem('facility'))?.name || "",
    id: JSON.parse(localStorage.getItem('facility'))?.id,
    table: JSON.parse(localStorage.getItem('facility'))?.t
  };

const facilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FACILITY_INFO:
        console.log(action.payload);
      saveFacility(action.payload);

      return {...state}
    default:
      return state;
  }
};

const saveFacility = ({ facilityId, table}) => {
    const facility = JSON.parse(localStorage.getItem('facility')) || {};
    localStorage.setItem('facility', JSON.stringify({ 
        ...facility,
        id: facilityId,
        t: table
        }));
}

export default facilityReducer;

