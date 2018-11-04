import React from 'react';
import App from 'shared/App';
import { BrowserRouter } from 'react-router-dom';
// <Provider store={store}><App/></Provider>
import { Provider } from 'react-redux';
import { store } from 'store';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

export default Root;