import { combineReducers } from 'redux';

import menuReducer from './MenuReducer';
import facilityReducer from './FacilityReducer';
import orderReducer from './OrderReducer';

const rootReducer = combineReducers({
    menu: menuReducer,
    order: orderReducer,
    facility: facilityReducer
});

export default rootReducer;