import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Generator from '../components/generator';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
    </div>
  );
}

export const RouterApp = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/generator">Generator</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/generator" component={Generator} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router >
  );
}
