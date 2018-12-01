import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const AgentPage = () => {
  return (
    <Fragment>
      Hello agent
      <Link to="/generator/done">Generate</Link>
      <button
        className="btn"
        type="submit"
      >
        Next
      </button>
    </Fragment>
  );
};
