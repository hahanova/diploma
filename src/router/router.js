import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Generator,
  Home,
  Archive,
  Header,
} from 'components';

import './menu.css';

const RouterApp = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/generator" component={Generator} />
        <Route path="/archive" component={Archive} />
      </Switch>
    </React.Fragment>
  );
};

export default RouterApp;
