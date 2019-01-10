import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { ToastContainer } from 'react-toastify';

import { AgentPage } from './agent-page';
import { HomePage } from './home-page';

import {
  Environment,
  Result,
  Transaction,
  Interface,
  Sequence,
} from './';

import {
  resetForm,
  increaseAgentAmount,
  resetAgentAmount,
  increaseTransactionFieldsAmount,
  resetTransactionFieldsAmount,
  increaseSignalFieldsAmount,
  resetSignalFieldsAmount,
  increaseSequenceFieldsAmount,
  resetSequenceFieldsAmount,
} from 'store';

import 'styles/index.css';
import './generator.css';

class GeneratorClass extends Component {
  render() {
    return (
      <main className="main">
        <section className="page section">
          <Switch>
            <Route
              path="/generator/env"
              component={Environment}
            />
            <Route
              path="/generator/agent"
              component={()=> <AgentPage {...this.props} />}
            />
            <Route
              path="/generator/done"
              component={()=> <Result {...this.props} />}
            />
            <Route
              path="/generator/transaction"
              component={()=> <Transaction {...this.props} />}
            />
            <Route
              path="/generator/interface"
              component={()=> <Interface {...this.props} />}
            />
            <Route
              path="/generator/sequence"
              component={()=> <Sequence {...this.props} />}
            />
            <Route
              path="/generator/agent"
              component={()=> <AgentPage {...this.props} />}
            />
            <Route
              component={()=> <HomePage {...this.props} />}
            />
          </Switch>
        </section>
        <ToastContainer />
      </main>
    );
  }
}

const mapDispatchToProps = {
  resetForm,
  increaseAgentAmount,
  resetAgentAmount,
  increaseTransactionFieldsAmount,
  resetTransactionFieldsAmount,
  increaseSignalFieldsAmount,
  resetSignalFieldsAmount,
  increaseSequenceFieldsAmount,
  resetSequenceFieldsAmount,
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
})(connect(null, mapDispatchToProps)(GeneratorClass));
