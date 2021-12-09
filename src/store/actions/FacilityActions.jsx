import { SET_FACILITY_INFO } from "./ActionTypes";

export const setFacilityInfo = payload => {
    return {
      type: SET_FACILITY_INFO,
      payload
    };
  };