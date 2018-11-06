import { createAction, handleActions } from 'redux-actions';

const CHANGE_PAGE = 'signup/CHANGE_PAGE';

export const change_page = createAction(CHANGE_PAGE, pageNumber=> pageNumber);

const initialState = {
    pageNumber : 1,
};

export default handleActions ({
    [CHANGE_PAGE]: (state, {payload: pageNumber}) => {
        return { pageNumber : pageNumber};
    },
}, initialState);