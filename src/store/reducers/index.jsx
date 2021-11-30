import { combineReducers } from 'redux';

import menuReducer from './MenuReducer';
import orderReducer from './OrderReducer';

const rootReducer = combineReducers({
    menu: menuReducer,
    order: orderReducer
});

export default rootReducer;