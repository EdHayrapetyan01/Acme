import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">

      <Container>
        <Row>
          <Col>
            <div className='textSection'>
            </div>
            <h1>Move money in easy secure steps</h1>
            <p>Vista Pay is your #1 provider of reliable
            credit & debit cards, secure deposits, loans,
            and other financial services available worldwide.
            </p>
            <Link to="/Account">
              <Button color="success"> My Account</Button> </Link>{' '}
          </Col>
          <Col>
            <img src="https://livedemo.zemez.io/html/vistapay/images/index-3-1-1144x912.jpg" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Home;