// App.js

import React, { useEffect, useState, useContext } from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// HashRouter BrowserRouter

//import NotFound from './components/NotFound';
//import Navbar from './components/Navbar';
// import Footer2 from './components/Footer2';
import Home from './pages/Home';
import NodeInfo from './pages/NodeInfo';
import Rewards from './pages/Rewards';
import Nodes from './pages/Nodes';
import Services from './pages/Services';
import Pledges from './pages/Pledges';

import Footer from "./components/ui/Footer"
import Navbar from "./components/ui/Navbar"
import {NavbarData,FooterData} from "./data/data.source";

function App() {



  return (
    <div className='bg-gray-900'>
      <Router>
        <Navbar data={NavbarData} />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/nodeinfo/:id" element={<NodeInfo />} />
            <Route exact path="/pledges" element={<Pledges />} />
            <Route exact path="/rewards" element={<Rewards />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/nodes" element={<Nodes />} />

            {/* <Route element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
      <Footer data={FooterData} />
    </div>
  );
}

export default App;
