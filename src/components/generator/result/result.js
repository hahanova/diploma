import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Result = () => {
  return (
    <Fragment>

      <Link to="/generator/env">
        <button className="initial-btn btn">
          Generate a new one
        </button>
      </Link>
    </Fragment>
  );
};