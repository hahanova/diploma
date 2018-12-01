import React, { Fragment } from 'react';
import { FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Transaction } from './transaction';

import 'react-toastify/dist/ReactToastify.css';
import '../generator.css';

export const TransactionsPage = (props) => {
  const handleClick = () => {
    toast('🦄 Transaction is successfully created!');
  };

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

      <Link to="/generator">
        <button className="initial-btn btn" onClick={handleClick}>
        Create
        </button>
      </Link>
    </Fragment>
  );
};
