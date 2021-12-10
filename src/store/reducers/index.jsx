import { combineReducers } from 'redux';

import menuReducer from './MenuReducer';
import facilityReducer from './FacilityReducer';
import orderReducer from './OrderReducer';
import orderItemReducer from './OrderItemReducer';

const rootReducer = combineReducers({
    menu: menuReducer,
    order: orderReducer,
    facility: facilityReducer,
    orderItem: orderItemReducer
});

export default rootReducer;