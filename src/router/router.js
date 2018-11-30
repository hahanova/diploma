import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Generator from '../components/generator';
import Home from '../components/home';

import './menu.css';

function Archive() {
  return (
    <div>
      <h2>Archive</h2>
    </div>
  );
}

const RouterApp = () => {
  return (
    <Router>
      <div>
        <ul className="menu-main">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/generator">Generator</Link>
          </li>
          <li>
            <Link to="/topics">Archive</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/generator" component={Generator} />
        <Route path="/archive" component={Archive} />
      </div>
    </Router >
  );
}

export default RouterApp;
