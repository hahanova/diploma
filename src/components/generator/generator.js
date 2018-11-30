import React, {Component} from 'react';
// import logo from '../logo.png';
import Transaction from '../Transaction';
import Signal from '../Signal';

import './App.css';

export default class Generator extends Component {
    constructor() {
        super();
        this.state = {
            signals: [{name:'', type:'', size:'', id:'signal_1'}],
            transactions: [{name:'', type:'', size:'', id:'transaction_1'}]
        };

        this.transactions = [
            {name:'', type:'', size:'', id:'transaction_1', ref: ''}
        ];
        this.signals = [
            {name:'', type:'', size:'', id:'signal_1'}
        ];
        this.name = null;
        this.type=null;
        this.formData = {
            name: '',
            type: ''
        }

    }

    addTransaction(e){
        e.preventDefault();
        let lastTransaction = this.transactions[this.transactions.length-1];
        let id = +lastTransaction.id.match(/\d+/)[0];

        id = 'transaction_' + ++id;
        this.transactions.push({name:'', type:'', size:'', id: id});
        this.setState({transactions: this.transactions});
    }

    addSignal(e){
        e.preventDefault();
        let lastSignal = this.signals[this.signals.length-1];
        let id = +lastSignal.id.match(/\d+/)[0];

        id = 'signal_' + ++id;
        this.signals.push({name:'', type:'', size:'', id: id});
        this.setState({signals: this.signals});
    }

    getDataFromMainForm(e){
        e.preventDefault();

        this.formData.name = this.formData.name.value;
        this.formData.type = this.formData.type.value;
        console.log('form: ', this.formData)


        for(let i in this.transactions){
            this.transactions[i] = this.transactions[i].ref.getDataTransactions();
        }

        for(let i in this.signals){
            this.signals[i] = this.signals[i].ref.getDataSignals();
        }
        console.log('trans', this.transactions);
        console.log('signals', this.signals);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo"/> */}
                    <h2>Let's generate template of verification</h2>
                    {/*<form className="form">*/}
                    {/*<input type="text" placeholder="enter book's name" className="form__input"*/}
                    {/*onKeyPress={(e) => this.search(e)}/>*/}
                    {/*</form>*/}
                </header>
                <main className="page">
                    <form className="form">

                        <fieldset className="form__section">
                            <legend className="form__section-name">Environment</legend>
                            <label className="form__title" htmlFor="env-name">Name:
                            <input ref={node => {this.formData.name = node}} className="form__input" type="text" id="env-name" placeholder=""/></label>

                            <label className="form__title"  htmlFor="env-type">Type:
                            <input ref={node => {this.formData.type = node}} className="form__input" type="text" id="env-type" placeholder=""/></label>
                        </fieldset>

                        <fieldset className="form__section">
                            <legend className="form__section-name">Transactions</legend>

                            {this.state.transactions ? this.state.transactions.map((trans, key) =>
                                <Transaction ref={(ref) => this.transactions[key].ref = ref} trans={trans} key={key}/>) : ''}

                            <button className="form__btn" onClick={this.addTransaction.bind(this)}>+ transaction</button>
                        </fieldset>

                        <fieldset className="form__section">
                            <legend className="form__section-name">Signals for Interface</legend>

                            {this.state.signals ? this.state.signals.map((signal, key) =>
                                <Signal ref={(ref) => this.signals[key].ref = ref} signal={signal} key={key}/>) : ''}

                            <button className="form__btn" onClick={this.addSignal.bind(this)}>+ signal</button>
                        </fieldset>

                        <button className="form__btn" onClick={this.getDataFromMainForm.bind(this)} type="submit">Next</button>
                    </form>
                </main>
            </div>
        );
    }
}

