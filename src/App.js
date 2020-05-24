import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import MainAccount from './components/Accounts/MainAccount';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/Account' component={MainAccount} />
          </Switch>
        </div>
      </Router>
    </>
  )
}
export default App;