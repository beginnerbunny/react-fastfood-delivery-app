import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import {Login} from '../modules/Login/Login.js';
import Signup from '../modules/Login/Signup.js';
import Payment from '../modules/Payment/Payment.js';
import Feedback from '../modules/Feedback/Feedback.js';

const Routes = () => (
    <div>
        <main>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/payment" component={Payment}/>
                <Route exact path="/feedback" component={Feedback}/>
            </Switch>
        </main>
    </div>
);

export default Routes;