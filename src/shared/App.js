import React from 'react';
import { Home } from 'pages';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
        </div>
    );
};

export default App;