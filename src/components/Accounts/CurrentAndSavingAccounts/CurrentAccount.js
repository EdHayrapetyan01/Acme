import React, { Component, Fragment } from 'react';
import TransactionHistory from '../TransactionHistory';
import { v4 as uuidv4 } from 'uuid';
import { Alert, InputGroup, InputGroupAddon, Button, Input, ListGroup, ListGroupItem } from 'reactstrap';
import AnimatedNumber from "animated-number-react";

class CurrentAccount extends Component {
  state = {
    value: '',
    depositValue: '',
    balance: 754,
    errorMsg: '',
    transactionHistory: [],
    content: null
  };
  // validate form
  validate = () => {
    let errorMsg = 'Your Overdraft maximum limit should be -5516 USD ';
    const balance = this.state.balance - this.state.value;
    const overdraftLimit = -5516;
    if (this.state.value !== '' && balance >= overdraftLimit) {
      this.setState({ errorMsg: '' })
      return true;
    } else {
      this.setState({ errorMsg });
      return false;
    }
  };
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
          <ListGroupItem>Current Account: Balance: {' '}
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

export default CurrentAccount;