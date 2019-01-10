import React, { Fragment } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { SequenceField } from './sequence-field';

import 'react-toastify/dist/ReactToastify.css';
import './sequence.css';

export const Sequence = (props) => {
  const handleClick = () => {
    toast('🦄 Sequence is successfully created!');
  };

  const sequenceMacros = {
    uvm_do: '`uvm_do(t)',
    uvm_do_with: '`uvm_do_with(t, {сon})',
    uvm_create: '`uvm_create(t)',
  };

  const {
    uvm_do,
    uvm_do_with,
    uvm_create,
  } = sequenceMacros;

  return (
    <Fragment>
      <header className="heading">
        <h2>
          Let's create a sequence
        </h2>
      </header>
      <fieldset className="form__section">
        <legend className="section-field__name">
          Sequence
        </legend>

        <label className="form__title class-params">
          Class Parameters:
          <Field
            className="form__input creating"
            name="sequenceReq"
            component="input"
            type="text"
            placeholder="req"
          />
          <Field
            className="form__input creating"
            name="sequenceRsp"
            component="input"
            type="text"
            placeholder="rsp"
          />
        </label>

        <label className="form__title" htmlFor="sequenceMacros">
          Macros:
          <Field
            className="form__input"
            name="sequenceMacros"
            component="select"
          >
            <option></option>
            <option value={uvm_do}>{uvm_do}</option>
            <option value={uvm_do_with}>{uvm_do_with}</option>
            <option value={uvm_create}>{uvm_create}</option>
          </Field>
        </label>

        <FieldArray
          name="sequence"
          component={SequenceField}
        />

        <button
          className="btn"
          onClick={props.increaseSequenceFieldsAmount}
        >
          add field
        </button>

        <label className="code-textarea" htmlFor="sequenceCode">
          <p>Code:</p>
          <Field
            className="form__input textarea"
            name="sequenceCode"
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
