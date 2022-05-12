import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
import React, { createContext } from "react";



function App() {


  return (
    <div className="App">
      <h1>جبت العيد للسيارات</h1>
      <Navbar className="Navbar"  />
      <Routes>

        <Route path='/'element={""}/>

        <Route path='/Register'element={<Register />}/>

        <Route path='/Login'element={<Login />}/>

      </Routes>
    </div>
  );
}

export default App;
