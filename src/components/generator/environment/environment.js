import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import './env.css';

export const Environment = () => {
  return (
    <Fragment>
      <fieldset className="form__section">
        <legend className="section-field__name">Environment</legend>

        <label className="form__title" htmlFor="envName">
          Name:
          <Field
            className="form__input"
            name="envName"
            component="input"
            type="text"
          />
        </label>

        <label className="form__title" htmlFor="baseType">
          Base type:
          <Field
            className="form__input"
            name="baseType"
            component="input"
            type="text"
            placeholder="uvm_env"
          />
        </label>

        <label className="form__title" htmlFor="agentAmount">
          Agent amount:
          <Field
            className="form__input"
            name="agentAmount"
            component="input"
            type="number"
          />
        </label>

        <label className="form__title container" htmlFor="testbench">
          Include TestBench
          <Field
            className="form__input"
            name="testbench"
            component="input"
            type="checkbox"
            id="testbench"
          />
          <span className="checkmark"></span>
        </label>

        <label className="form__title" htmlFor="envConfig">
          Config:
          <Field
            className="form__input textarea"
            name="envConfig"
            component="textarea"
            type="text"
          />
        </label>
      </fieldset>

      <Link to="/generator/agent">
        <button className="initial-btn btn">
          Next
        </button>
      </Link>
    </Fragment>
  );
};
