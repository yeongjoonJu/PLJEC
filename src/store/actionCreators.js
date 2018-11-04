import { bindActionCreators } from 'redux';
import * as loginActions from './modules/Login';
import store from './index';

const { dispatch } = store;

// binding
export const LoginActions = bindActionCreators(loginActions, dispatch);