import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Environment,
  TransactionsSection,
  SignalsSection,
} from './form';

import {
  updateForm,
  selectForm,
} from 'store';

import 'styles/index.css';
import './generator.css';

class Generator extends Component {
  constructor(props) {
    super(props);

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
    };

    this.props.updateForm('hello');
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
    console.log('form: ', this.formData);


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
            <TransactionsSection
              onClick={this.addTransaction.bind(this)}
              transactions={this.state.transactions}
              allTransactions={this.transactions}
            />
            <SignalsSection
              onClick={this.addSignal.bind(this)}
              signals={this.state.signals}
              allSignals={this.signals}
            />
            <button
              className="btn"
              onClick={this.getDataFromMainForm.bind(this)}
              type="submit"
            >
              Next
            </button>
            {this.props.form}
          </form>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  form: selectForm(state),
});


const mapDispatchToProps = {
  updateForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Generator);
