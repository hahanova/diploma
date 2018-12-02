import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

import {
  selectTransactionFieldsAmount,
} from 'store';

import '../generator.css';

export const TransactionFieldClass = (props) => {
  const transactionFieldsArray = Array.from(
    { length: props.transactionFieldsAmount },
    (value, index) => index + 1,
  );

  return transactionFieldsArray.map((index) => (
    <div className="section-field">
      <Field
        className="form__input"
        name={`transaction${index}.name`}
        component="input"
        type="text"
        placeholder="name"
      />
      <Field
        className="form__input"
        name={`transaction${index}.type`}
        component="input"
        type="text"
        placeholder="type"
      />
      <Field
        className="form__input"
        name={`transaction${index}.size`}
        component="input"
        type="number"
        placeholder="size"
      />
    </div>
  ));
};

const mapStateToProps = (state) => ({
  transactionFieldsAmount: selectTransactionFieldsAmount(state),
});

export const TransactionField = connect(mapStateToProps)(TransactionFieldClass);
