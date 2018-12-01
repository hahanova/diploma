import React from 'react';

import Transaction from './transaction';

import '../generator.css';

export const TransactionsSection = (props) => {
  return (
    <fieldset className="form__section">
      <legend className="section-field__name">
        Transactions
      </legend>

      {props.transactions ? props.transactions.map((trans, key) =>
        <Transaction
          ref={(ref) => props.allTransactions[key].ref = ref}
          trans={trans}
          key={key}
        />) : ''}

      <button
        className="btn"
        onClick={props.onClick}
      >
        + transaction
      </button>
    </fieldset>
  );
};
