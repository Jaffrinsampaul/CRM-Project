import logo from './logo.svg';
import './App.css';
import Customer from './components/customer'
import ChartComp from './components/chart';

import React from 'react';
import DashBoard from './dashboard/dashboard';

import DeleteAlert from './components/delete';
import LandingPage from './components/landingPage';
import {colors} from "./style/color"
import AddCustomer from './components/addcustomer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Customer /> */}
      {/* <ChartComp /> */}
      {/* <DashBoard /> */}
      {/* <LandingPage/> */}
      {/* <DeleteAlert/> */}

      <AddCustomer />
    </div>
  )
}

export default App;