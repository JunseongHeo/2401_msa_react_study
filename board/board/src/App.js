import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Voc from './pages/voc/Voc'
import VocView from './pages/voc/VocView'
import VocCreate from "./pages/voc/VocCreate";
import VocUpdate from "./pages/voc/VocUpdate";
import Jun from "./pages/jun/Jun";
import JunView from './pages/jun/JunView'
import JunCreate from "./pages/jun/JunCreate";
import JunUpdate from "./pages/jun/JunUpdate";
import SB from './pages/sb/SB'
import SBView from './pages/sb/SBView'
import SBCreate from "./pages/sb/SBCreate";
import SBUpdate from "./pages/sb/SBUpdate";

function App() {
  return (
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/station'/>
            <Route path='/voc' element={<Voc />}/>
            <Route path='/voc/:vocId' element={<VocView />}/>
            <Route path='/voc/create' element={<VocCreate />}/>
            <Route path='/voc/update/:vocId' element={<VocUpdate />}/>
            <Route path='/jun' element={<Jun />}/>
            <Route path='/jun/:junId' element={<JunView />}/>
            <Route path='/jun/create' element={<JunCreate />}/>
            <Route path='/jun/update/:junId' element={<JunUpdate />}/>
            <Route path='/sb' element={<SB />}/>
            <Route path='/sb/:vocId' element={<SBView />}/>
            <Route path='/sb/create' element={<SBCreate />}/>
            <Route path='/sb/update/:vocId' element={<SBUpdate />}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
