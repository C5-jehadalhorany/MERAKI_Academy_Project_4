import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
import React, { createContext } from "react";




export const tokenContext = createContext()

function App() {
  const [token, setToken] = useState("")
  const [message, setMessage] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  return (
    <div className="App">
      <tokenContext.Provider value={(isLoggedIn, setIsLoggedIn, token, setToken, message, setMessage)}>

        <h1>جبت العيد للسيارات</h1>
        <Navbar className="Navbar" />
        <Routes>

          <Route path='/' element={""} />

          <Route path='/Register' element={<Register />} />

          <Route path='/Login' element={<Login />} />

          <Route path='/Dashboard' element={<Dashboard />} />

        </Routes>

      </tokenContext.Provider>
    </div>
  );
}

export default App;
