import { createAction, handleActions } from 'redux-actions';
import { __await } from 'tslib';

const SEND_MAIL_REQUEST = 'contact/SEND_MAIL_REQUEST';
const SEND_MAIL_SUCCESS = 'contact/SEND_MAIL_SUCCESS'
const SEND_MAIL_FAILED = 'contact/SEND_MAIL_FAILED';
const SEND_MAIL = 'conact/SEND_MAIL';
const AUTH_ENDPOINT_BASE = 'api/v1/contact';

export const send_mail_request = createAction(SEND_MAIL_REQUEST,
     (message)=> async(dispatch) => {
         try {
             const response = await postMessage(dispatch, SEND_MAIL,
             `${AUTH_ENDPOINT_BASE}/mail`, message, false);
         } catch (err) {
            // await handleError(dispatch, err, SEND_MAIL);
         }

});
export const send_mail_success = createAction(SEND_MAIL_SUCCESS);
export const send_mail_failed = createAction(SEND_MAIL_FAILED);

const initialState = {
    loading: false,
    message: '',
    errMessage: ''
}

export default handleActions ({
    [SEND_MAIL_REQUEST]: (state, action) => {
        return {
            ...state,
            loading: true,
            message: '',
            errMessage: ''
        };
    },
    [SEND_MAIL_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            message: action.payload.message,
            errMessage: ''
        };
    },
    [SEND_MAIL_FAILED]: (state, action) => {
        return {
            ...state,
            loading: false,
            message: '',
            errMessage: action.payload
        };
    }
}, initialState);