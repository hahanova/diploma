import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'styles/index.css';

export class HomePage extends Component {
  render() {
    return (
      <section>
        <Link className="btn" to="/generator/env">Start</Link>
        <hr />
        <button
          className="btn"
          // onClick={}
          type="button"
        >
          Create transaction
        </button>
        <button
          className="btn"
          // onClick={}
          type="button"
        >
          Create interface
        </button>
        <button
          className="btn"
          // onClick={}
          type="button"
        >
          Create sequence
        </button>
        {/* <Route path={`${this.props.match.path}/env`} component={Environment} /> */}
      </section>
    );
  }
}
