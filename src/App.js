import logo from './logo.svg';
import './App.css';
import Customer from './components/customer'
import ChartComp from './components/chart';

import React from 'react';
import DashBoard from './dashboard/dashboard';

import DeleteAlert from './components/delete';
import {colors} from "./style/color"
import AddCustomer from './components/addcustomer';
import LandingPage from './components/landingPage';

function App() {
  return (
    <section style={{
        background: colors.darkGrey,
        margin:0, height: "100vh"
      }}>
        <LandingPage/>
        {/* <DashBoard/> */}
        {/* <DeleteAlert/> */}
    </section>
   
  );
}

export default App;