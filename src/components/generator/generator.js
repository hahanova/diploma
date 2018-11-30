import React, { Component } from 'react';
import {
  Environment,
} from './form';

import Transaction from './form/transaction';
import Signal from './form/signal';

import '../../styles/index.css';
import './generator.css';

export default class Generator extends Component {
  constructor() {
    super();
    this.state = {
      signals: [{ name: '', type: '', size: '', id: 'signal_1' }],
      transactions: [{ name: '', type: '', size: '', id: 'transaction_1' }]
    };

    this.transactions = [
      { name: '', type: '', size: '', id: 'transaction_1', ref: '' }
    ];
    this.signals = [
      { name: '', type: '', size: '', id: 'signal_1' }
    ];
    this.name = null;
    this.type = null;
    this.formData = {
      name: '',
      type: ''
    }

  }

  addTransaction(e) {
    e.preventDefault();
    let lastTransaction = this.transactions[this.transactions.length - 1];
    let id = +lastTransaction.id.match(/\d+/)[0];

    id = 'transaction_' + ++id;
    this.transactions.push({ name: '', type: '', size: '', id: id });
    this.setState({ transactions: this.transactions });
  }

  addSignal(e) {
    e.preventDefault();
    let lastSignal = this.signals[this.signals.length - 1];
    let id = +lastSignal.id.match(/\d+/)[0];

    id = 'signal_' + ++id;
    this.signals.push({ name: '', type: '', size: '', id: id });
    this.setState({ signals: this.signals });
  }

  getDataFromMainForm(e) {
    e.preventDefault();

    this.formData.name = this.formData.name.value;
    this.formData.type = this.formData.type.value;
    console.log('form: ', this.formData)


    for (let i in this.transactions) {
      this.transactions[i] = this.transactions[i].ref.getDataTransactions();
    }

    for (let i in this.signals) {
      this.signals[i] = this.signals[i].ref.getDataSignals();
    }
    console.log('trans', this.transactions);
    console.log('signals', this.signals);
  }

  render() {
    return (
      <main className="main">
        <header className="heading">
          <h2>Let's generate template of verification</h2>
        </header>
        <section className="page section">
          <form className="form">
            <Environment formData={this.formData} />

            <fieldset className="form__section">
              <legend className="form__section-name">Transactions</legend>

              {this.state.transactions ? this.state.transactions.map((trans, key) =>
                <Transaction ref={(ref) => this.transactions[key].ref = ref} trans={trans} key={key} />) : ''}

              <button className="form__btn" onClick={this.addTransaction.bind(this)}>+ transaction</button>
            </fieldset>

            <fieldset className="form__section">
              <legend className="form__section-name">Signals for Interface</legend>

              {this.state.signals ? this.state.signals.map((signal, key) =>
                <Signal ref={(ref) => this.signals[key].ref = ref} signal={signal} key={key} />) : ''}

              <button className="form__btn" onClick={this.addSignal.bind(this)}>+ signal</button>
            </fieldset>

            <button className="form__btn" onClick={this.getDataFromMainForm.bind(this)} type="submit">Next</button>
          </form>
        </section>
      </main>
    );
  }
}
