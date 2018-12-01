import React from 'react';
import { FieldArray } from 'redux-form';

import Signal from './signal';

import '../../generator.css';

export const SignalsSection = (props) => {
  const renderSignal = () => {
    if (!props.signals) return null;

    return props.signals.map((signal, key) =>
      <Signal
        ref={(ref) => props.allSignals[key].ref = ref}
        signal={signal}
        key={key}
      />
    );
  };

  const randomId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  return (
    <fieldset className="form__section">
      <legend className="section-field__name">
        Signals for Interface
      </legend>
      <FieldArray
        name={`signals${randomId()}`}
        component={renderSignal}
      />
      <button
        className="btn"
        onClick={props.onClick}
      >
        + signal
      </button>
    </fieldset>
  );
};
