import React from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import Main from './Main';
import Navbar from './Navbar'
import Payment from '../payment'
import Dashboard from '../dashboard';
import PrivateRoute from '../routes/PrivateRoute';
import Verify from '../verify';
import Admin from '../admin';
import Error from '../otherComps/404';

const Index = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Main} />
                <PrivateRoute path='/admin' component={Admin} />
                <Route path='/invest' component={Payment} />
                <PrivateRoute exact path='/verification' component={Verify}/>
                <PrivateRoute path='/dashboard' component={Dashboard}/>
                <Route component={Error} />
            </Switch>
        </div>
    )
}

export default withRouter(Index)
