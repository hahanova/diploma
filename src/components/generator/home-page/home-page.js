import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'styles/index.css';
import './home-page.css';

export class HomePage extends Component {
  render() {
    return (
      <section>
        <Link to="/generator/env">
          <button className="initial-btn btn">
            Start
          </button>
        </Link>

        <p className="paragraph">
          You also have an opportunity to create transaction / interface / sequence right now,
          so you can use it during generating template afterwards.
        </p>
        <div className="btn-wrapper">
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
        </div>
      </section>
    );
  }
}
