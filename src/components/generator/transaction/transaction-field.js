import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

import {
  selectTransactionFieldsAmount,
  increaseTransactionFieldsAmount,
  decreaseTransactionFieldsAmount,
  resetTransactionFieldsAmount,
} from 'store';

export const TransactionFieldComponent = (props) => {
  const transactionFieldsArray = Array.from(
    { length: props.transactionFieldsAmount },
    (value, index) => index + 1,
  );

  return transactionFieldsArray.map((index) => (
    <div className="section-field" key={`trans-${index}`}>
      <Field
        className="form__input creating"
        name={`transaction${index}.type`}
        component="input"
        type="text"
        placeholder="type"
      />
      <Field
        className="form__input creating"
        name={`transaction${index}.typeSize`}
        component="input"
        type="text"
        placeholder="size"
      />
      <Field
        className="form__input creating"
        name={`transaction${index}.name`}
        component="input"
        type="text"
        placeholder="type"
      />
      <Field
        className="form__input creating"
        name={`transaction${index}.nameSize`}
        component="input"
        type="text"
        placeholder="size"
      />
      <button
        className="btn btn_close"
        onClick={props.decreaseTransactionFieldsAmount}
      >
        x
      </button>
    </div>
  ));
};

const mapStateToProps = (state) => ({
  transactionFieldsAmount: selectTransactionFieldsAmount(state),
});

const mapDispatchToProps = {
  increaseTransactionFieldsAmount,
  decreaseTransactionFieldsAmount,
  resetTransactionFieldsAmount,
};

export const TransactionField = connect(mapStateToProps, mapDispatchToProps)(TransactionFieldComponent);
