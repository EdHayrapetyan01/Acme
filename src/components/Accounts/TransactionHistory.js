import React from 'react';
import { UncontrolledAlert ,ListGroup, ListGroupItem} from 'reactstrap';


const TransactionHistory = ({ transactionHistory }) => {
  const historyList = transactionHistory.length ? (
    transactionHistory.map(money => {
      return (
        <div className="collection-item" key={money.id}>
          <UncontrolledAlert color="success">
            {money.depositValue ?
              `Your deposit is ${money.content} USD`
              : `Withdrawn ${money.content} USD`}
          </UncontrolledAlert>
        </div>
      )
    })
  ) : null
  return (
    <div className="history">
      {transactionHistory.length ?  <ListGroup>
          <ListGroupItem>Viewing Transaction History</ListGroupItem>
        </ListGroup> : null }
        <br/>
        {historyList}
    </div>
  )
}

export default React.memo(TransactionHistory);