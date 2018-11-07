import { createAction, handleActions } from 'redux-actions';

const CHANGE_VALUE = 'signup/CHANGE_VALUE';
const SUBMIT_FIRST = 'signup/SUBMIT_FIRST';
const SEND_EMAIL = 'signup/SEND_EMAIL';

export const change_value = createAction(CHANGE_VALUE, target => target);
export const submit_first = createAction(SUBMIT_FIRST);
export const send_email = createAction(SEND_EMAIL);

const initialState = {
    email : '',
    password : '',
    pcheck : '',
    certification_number : '',
    sended : false,
    check : {
        email : false,
        password : false,
        pcheck : false,
        certification_number : false,
        enable_next : false
    }
};

export default handleActions ({
    [CHANGE_VALUE] : (state, action) => {
        const { name, value } = action.payload;
        const email_regex = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/;
        const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,20}$/;
        let check = false;

        if(name === 'email') {
            check = (email_regex.exec(value) !== null);
        }
        else if(name === 'password') {
            check = (password_regex.exec(value) !== null);
        }
        else if(name === 'pcheck') {
            if(value === state.password) check = true;
        }
        else return;

        return {
            ...state,
            [name] : value,
            check: {
                ...state.check,
                [name] : check
            }
        }
    },
    [SUBMIT_FIRST] : (state, action) => {
        return { email : action.email, password : action.password};
    },
    [SEND_EMAIL] : (state, action) => {
        return {...state,
             sended : true};
    }
}, initialState);