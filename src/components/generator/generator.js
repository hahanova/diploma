import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { AgentPage } from './agent-page';
import { HomePage } from './home-page';

import {
  Environment,
  TransactionsSection,
  SignalsSection,
} from './';

import {
  updateAgentAmount,
  selectAgentAmount,
} from 'store';

import 'styles/index.css';
import './generator.css';

class GeneratorClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signals: [{ name: '', type: '', size: '', id: 'signal_1' }],
      transactions: [{ name: '', type: '', size: '', id: 'transaction_1' }],
    };

    this.transactions = [
      { name: '', type: '', size: '', id: 'transaction_1', ref: '' }
    ];
    this.signals = [
      { name: '', type: '', size: '', id: 'signal_1' }
    ];
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

  renderContent() {
    const { pathname } = this.props.location;

    switch (true) {
    case (pathname.includes('env')):
      return <Environment />;

    case (pathname.includes('agent')):
      return <AgentPage {...this.props} />;

    case (pathname.includes('done')):
      return <h3>Done</h3>;

    default:
      return <HomePage {...this.props} />;
    }

  }

  render() {
    return (
      <main className="main">
        <header className="heading">
          <h2>Let's generate template of verification</h2>
        </header>
        <section className="page section">
          {this.renderContent()}
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  agentAmount: selectAgentAmount(state),
});

const mapDispatchToProps = {
  updateAgentAmount,
};

export const Generator = reduxForm({
  form: 'generatorData',
  enableReinitialize: true,
  initialValues: {
    env: { 
      baseType: 'uvm_env',
      testbench: false,
    },
  },
})(connect(mapStateToProps, mapDispatchToProps)(GeneratorClass));
