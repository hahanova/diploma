import React from 'react';

import Signal from './signal';

import '../../generator.css';

export const SignalsSection = (props) => {
  return (
    <fieldset className="form__section">
      <legend className="section-field__name">
        Signals for Interface
      </legend>

      {props.signals ? props.signals.map((signal, key) =>
        <Signal
          ref={(ref) => props.allSignals[key].ref = ref}
          signal={signal}
          key={key}
        />) : ''}

      <button
        className="btn"
        onClick={props.onClick}
      >
        + signal
      </button>
    </fieldset>
  );
};
