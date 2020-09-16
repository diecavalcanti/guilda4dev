import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Followers from '../pages/Followers';
import Following from '../pages/Following';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/followers" component={Followers} exact />
      <Route path="/following" component={Following} exact />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
