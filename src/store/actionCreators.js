import { bindActionCreators } from 'redux';
import * as loginActions from './modules/login';
import * as signupActions from './modules/signup'
import store from './index';
const { dispatch } = store;

// binding
export const LoginActions = bindActionCreators(loginActions, dispatch);
export const SignupActions = bindActionCreators(signupActions, dispatch);