import React from 'react';
import { Field } from 'redux-form';

import '../generator.css';

export const Transaction = (props) => {
  const index = 1;
  return (
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
  );

}

