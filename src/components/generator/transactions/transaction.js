import React, { Component } from 'react';

import 'styles/index.css';
import '../generator.css';

export class Transaction extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  getDataTransactions() {
    this.props.trans.name = this.props.trans.name.value;
    this.props.trans.type = this.props.trans.type.value;
    this.props.trans.size = this.props.trans.size.value;

    return this.props.trans;
  }

  render() {
    return (
      <div className="section-field" id={this.props.trans.id}>
        <input ref={node => { this.props.trans.name = node; }} className="form__input" type="text" id="trans-name" placeholder="name" />
        <input ref={node => { this.props.trans.type = node; }} className="form__input" type="text" id="trans-type" placeholder="type" />
        <input ref={node => { this.props.trans.size = node; }} className="form__input" type="number" id="trans-size" placeholder="size" />
      </div>
    );
  }
}

export default Transaction;
