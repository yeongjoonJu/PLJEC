import { combineReducers } from 'redux';
import login from './login';
import personalInputReducer from './personalInputReducer';
import contactReducer from './contactReducer';

export default combineReducers({
    login, personalInputReducer, contactReducer
});