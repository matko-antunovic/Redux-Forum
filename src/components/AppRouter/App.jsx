import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ThreadContainer from "../../pages/Thread/ThreadContainer"

const AppRouter = () => (
  <Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />    
    <Route path="/register" component={Register} />    
    <Route path="/thread/:id" component={ThreadContainer} />    
  </Fragment>
);

export default AppRouter;
