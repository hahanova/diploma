import React, { Fragment } from 'react';
import { FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';

import { Agent } from './agent';

export const AgentPage = (props) => {
  const randomId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  return (
    <Fragment>
      <FieldArray
        name={`agent-${randomId()}`}
        component={Agent}
      />

      <button
        className="initial-btn btn"
        onClick={props.updateAgentAmount}
      >
        + add agent
      </button>

      <Link to="/generator/done">
        <button className="initial-btn btn">
          Generate
        </button>
      </Link>
    </Fragment>
  );
};
