import { combineReducer, combineReducers } from 'redux';

import UserReducer from './user/user.reducer';

export default combineReducers({
    user:UserReducer
});