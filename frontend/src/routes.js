import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ClientCreate from './pages/Clientcreate';
import EditClient from './pages/EditClient';
import Ods from './pages/Ods';
import EditOds from './pages/EditOds';
import CreateOds from './pages/CreateOds';
import Odsprocess from './pages/Odsprocess';
import EditProcess from './pages/EditProcess';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component={Login} />
                <Route path = "/register" component={Register} />
                <Route path = "/profile" component={Profile} />
                <Route path = "/clientcreate" component={ClientCreate} />
                <Route path = "/editclient" component={EditClient} />
                <Route path = "/ods" component={Ods} />
                <Route path = "/editods" component={EditOds} />
                <Route path = "/createods" component={CreateOds} />
                <Route path = "/process" component={Odsprocess} />
                <Route path = "/editprocess" component={EditProcess} />

                
            </Switch>
        </BrowserRouter>
    );
}