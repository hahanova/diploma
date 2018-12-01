import React, { Component } from 'react';
import { Field } from 'redux-form';

import 'styles/index.css';
import '../../generator.css';

export class Signal extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  randomId() {
    return '_';
  }

  render() {
    const {
      id,
    } = this.props.signal;

    return (
      <div className="section-field" id={id}>
        <Field
          className="form__input"
          name={`signal-name${this.randomId()}`}
          component="input"
          type="text"
          placeholder="name"
        />
        <Field
          className="form__input"
          name={`signal-type${this.randomId()}`}
          component="input"
          type="text"
          placeholder="type"
        />
        <Field
          className="form__input"
          name={`signal-size${this.randomId()}`}
          component="input"
          type="number"
          placeholder="size"
        />
        {/* <input ref={node => { this.props.signal.name = node; }} className="form__input" type="text" id="signal-name" placeholder="name" /> */}
        {/* <input ref={node => { this.props.signal.type = node; }} className="form__input" type="text" id="signal-type" placeholder="type" />
        <input ref={node => { this.props.signal.size = node; }} className="form__input" type="number" id="signal-size" placeholder="size" /> */}
      </div>
    );
  }
}

export default Signal;
