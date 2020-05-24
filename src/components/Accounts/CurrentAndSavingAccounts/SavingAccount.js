import React, { Component, Fragment } from 'react';
import TransactionHistory from '../TransactionHistory';
import { v4 as uuidv4 } from 'uuid';
import { Alert, InputGroup, InputGroupAddon, Button, Input, ListGroup, ListGroupItem } from 'reactstrap';
import AnimatedNumber from "animated-number-react";

class SavingAccount extends Component {
  state = {
    value: '',
    depositValue: '',
    balance: 111,
    errorMsg: '',
    transactionHistory: [],
    content: null,
  };
  // validate form
  validate = () => {
    let errorMsg = 'Insufficient balance! Minimum balance should be 54 USD'
    const balance = this.state.balance - this.state.value;
    if (balance >= 54 && this.state.value !== '') {
      this.setState({ errorMsg: '' })
      return true;
    } else {
      this.setState({ errorMsg });
      return false;
    }
  };
  // get input values
  handleChange = (e) => {
    this.setState({ value: e.target.value, content: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({ balance: this.state.balance - parseInt(this.state.value) });
      this.addTransactionHistory(this.state);
    }
  }
  //Transaction history func for component
  addTransactionHistory = (money) => {
    money.id = uuidv4();
    let transactionHistory = [...this.state.transactionHistory, money];
    this.setState({
      transactionHistory
    });
  }
  handleSecondForm = (e) => {
    this.setState({ depositValue: e.target.value, content: e.target.value });
  }
  SubmitSecondForm = (e) => {
    e.preventDefault();
    if (this.state.depositValue !== '') {
      this.setState({ balance: this.state.balance + parseInt(this.state.depositValue) });
    }
    this.addTransactionHistory(this.state);
  }
  formatValue = (value) => value.toFixed(2);
  render () {
    const showError = this.state.errorMsg !== '';
    return (
      <Fragment>
        <ListGroup>
          <ListGroupItem>Saving Account: Balance: {' '}
            <AnimatedNumber
              value={this.state.balance}
              formatValue={this.formatValue}
            /> USD
            </ListGroupItem>
        </ListGroup>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            <InputGroup>
              <Input
                type='number'
                value={this.state.value}
                onChange={this.handleChange}
                required />
              <InputGroupAddon addonType="append">
                <Button color="secondary">Withdraw Money</Button>
              </InputGroupAddon>
            </InputGroup>
          </label>
          {showError ? <Alert color="danger">
            {this.state.errorMsg}
          </Alert> : null}
        </form>
        <form onSubmit={this.SubmitSecondForm}>
          <label>
            <InputGroup>
              <Input
                type='number'
                value={this.state.depositValue}
                onChange={this.handleSecondForm}
                required />
              <InputGroupAddon addonType="append">
                <Button
                  disabled={this.state.balance <= 54}
                  color="secondary">Deposit Money</Button>
              </InputGroupAddon>
            </InputGroup>
          </label>
        </form>
        <TransactionHistory transactionHistory={this.state.transactionHistory} />
      </Fragment>
    )
  }
}

export default SavingAccount;