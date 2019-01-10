import React, { Fragment } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { TransactionField } from './transaction-field';

import 'react-toastify/dist/ReactToastify.css';
import './transaction.css';

export const Transaction = (props) => {
  const handleClick = () => {
    toast('🦄 Transaction is successfully created!');
  };

  return (
    <Fragment>
      <header className="heading">
        <h2>
          Let's create a transaction
        </h2>
      </header>
      <fieldset className="form__section">
        <legend className="section-field__name">
          Transaction
        </legend>

        <FieldArray
          name="transaction"
          component={TransactionField}
        />

        <button
          className="btn"
          onClick={props.increaseTransactionFieldsAmount}
        >
          add field
        </button>

        <label className="code-textarea" htmlFor="transactionCode">
          <p>Code:</p>
          <Field
            className="form__input textarea"
            name="transactionCode"
            component="textarea"
            type="text"
          />
        </label>
      </fieldset>

      <Link to="/generator">
        <button
          className="initial-btn btn"
          onClick={handleClick}
        >
          Create
        </button>
      </Link>
    </Fragment>
  );
};
