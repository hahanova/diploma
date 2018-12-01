import React, { Fragment } from 'react';
import { FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';

import { Transaction } from './transaction';

import '../generator.css';

export const TransactionsPage = (props) => {
  return (
    <Fragment>
      <fieldset className="form__section">
        <legend className="section-field__name">
          Transactions
        </legend>

        <FieldArray
          name="transaction"
          component={Transaction}
        />

        <button
          className="btn"
          onClick={props.onClick}
        >
          + transaction
        </button>
      </fieldset>

      <Link to="/generator/done">
        <button className="initial-btn btn">
          Create
        </button>
      </Link>
    </Fragment>
  );
};
