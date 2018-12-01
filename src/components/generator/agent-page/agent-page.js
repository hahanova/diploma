import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class AgentPage extends Component {
  render() {
    return (
      <main className="main">
        <header className="heading">
          <h2>Let's generate template of verification</h2>
        </header>
        <section className="page section">
          <form onSubmit={this.handleSubmit}>
            Hello agent
              <Link to="/generator/done">Generate</Link>
            <button
              className="btn"
              type="submit"
            >
              Next
              </button>
          </form>

        </section>
      </main>
    );
  }
}
