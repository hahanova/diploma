import React, { Component } from 'react';

import 'styles/index.css';

export default class Home extends Component {
  render() {
    return (
      <main className="main">
        <section className="section">
          <header className="heading">
            <h2>Welcome</h2>
          </header>
          <p>My name is Anastasia Hahanova. I want to perform for you VHDL generator.</p>
          <p>The principle work as following:</p>
          <ol>
            <li>You enter values for Signals, Transactions etc.</li>
            <li>Choose a template for generating</li>
            <li>Our service generates a VHDL file for you</li>
            <li>Woola, you got it!</li>
          </ol>
        </section>
      </main>
    );
  }
}
