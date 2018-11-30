import React from 'react';

export const Environment = (props) => {
  return (
    <fieldset className="form__section">
      <legend className="form__section-name">Environment</legend>
      <label className="form__title" htmlFor="env-name">
        Name:
        <input
          ref={ node => { props.formData.name = node; } }
          className="form__input"
          type="text"
          id="env-name"
          placeholder=""
        />
      </label>

      <label className="form__title" htmlFor="env-type">Type:
        <input
          ref={ node => { props.formData.type = node; } }
          className="form__input"
          type="text"
          id="env-type"
          placeholder=""
        />
      </label>
    </fieldset>
  );
};
