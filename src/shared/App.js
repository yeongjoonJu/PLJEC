import React from 'react';
import { Home, Signup } from 'pages';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Switch>
                <Route path="/signup/:number" component={Signup}/>
                <Route path="/signup" component={Signup}/>
            </Switch>
        </div>
    );
};

export default App;