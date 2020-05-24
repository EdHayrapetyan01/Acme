import React from 'react';
import SavingAccount  from './CurrentAndSavingAccounts/SavingAccount'
import CurrentAccount from  './CurrentAndSavingAccounts/CurrentAccount';
import { Container, Row, Col } from 'reactstrap';
import './Account.css';

const  MainAccount = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className='accountCol' sm='6'>
            <SavingAccount/>
          </Col>
          <Col className='accountCol' sm='6'>
            <CurrentAccount/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
export default MainAccount;