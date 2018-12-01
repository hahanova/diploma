import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

import {
  updateAgentAmount,
  selectAgentAmount,
} from 'store';

export const AgentClass = (props) => {
  const agentsArray = Array.from({ length: props.agentAmount }, (value, index) => index + 1);

  return agentsArray.map((index) => (
    <fieldset className="form__section" key={index}>
      <legend className="section-field__name">Agent {index}</legend>

      <label className="form__title" htmlFor={`agent${index}.name`}>
        Name:
        <Field
          className="form__input"
          name={`agent${index}.name`}
          component="input"
          type="text"
        />
      </label>

      <label className="form__title" htmlFor={`agent${index}.baseType`}>
        Base type:
        <Field
          className="form__input"
          name={`agent${index}.baseType`}
          component="input"
          type="text"
          placeholder="uvm_env"
        />
      </label>

      <label className="form__title" htmlFor={`agent${index}.monitor`}>
        Monitor:
        <Field
          className="form__input"
          name={`agent${index}.monitor`}
          component="input"
          type="number"
        />
      </label>

      <label className="form__title" htmlFor={`agent${index}.driver`}>
        Driver
        <Field
          className="form__input"
          name={`agent${index}.driver`}
          component="input"
          type="text"
          id="testbench"
        />
      </label>

      <label className="form__title" htmlFor={`agent${index}.config`}>
        Config:
        <Field
          className="form__input textarea"
          name={`agent${index}.config`}
          component="textarea"
          type="text"
        />
      </label>
    </fieldset>
  ));
};

const mapStateToProps = (state) => ({
  agentAmount: selectAgentAmount(state),
});

const mapDispatchToProps = {
  updateAgentAmount,
};

export const Agent = connect(mapStateToProps, mapDispatchToProps)(AgentClass);
