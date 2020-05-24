import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm   bg-dark mb-4">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
         <img className='logo' src="https://www.logolynx.com/images/logolynx/fe/feeaee439d4ed5551e59e603365a39b8.png" alt=""/>
          </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Account">
                Account
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;