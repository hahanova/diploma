import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './result.css';

export const Result = () => {
  return (
    <Fragment>
      <section className="download-wrapper">
        <i className="fas fa-file-code icon"></i>
        <p className="">Press the icon to download</p>
      </section>

      <Link to="/generator/env">
        <button className="initial-btn btn btn_large">
          Generate a new one
        </button>
      </Link>
    </Fragment>
  );
};