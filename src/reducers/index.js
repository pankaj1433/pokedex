import { combineReducers } from 'redux'

import {
    userReducers
} from './user.reducer'

export const rootReducer  =  combineReducers({
    userReducers,
});