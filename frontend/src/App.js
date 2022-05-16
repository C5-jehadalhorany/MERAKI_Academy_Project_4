import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { Routes, Route, Link } from "react-router-dom";
import { useState ,useEffect} from 'react'
import React, { createContext } from "react";
import Asc from './components/getAllcars/getAllCars';



export const tokenContext = createContext()

function App() {
  const [token, setToken] = useState( localStorage.getItem("token") || "") // -> get it from localStorage
  const [message, setMessage] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false); // isToken ? true : false
  
  return (
    <div className="App">
      <tokenContext.Provider value={{isLoggedIn, setIsLoggedIn, token, setToken, message, setMessage}}>

      {/* <h1>جبت العيد للسيارات</h1> */}
        <Navbar className="Navbar" />
        <Routes>
          

          <Route path='/' element={<div><h1>The best for cars</h1><Asc/></div>} />

          <Route path='/Register' element={<Register />} />

          <Route path='/Login' element={<Login />} />

          <Route path='/Dashboard' element={<div><Dashboard /><Asc/></div>} />

          <Route path='/Dashboard/:id' element={<Dashboard />} />

        </Routes>
        
    
      </tokenContext.Provider>
    </div>
  );
}

export default App;

{/* <Route path="/profile/:id" element={<Profile />} /> */} // بدي أستخدم هاض الأشي عشان أنتقل من صفحة ل صفحه ثانيه عن طريق الأي دي الي رح يجيني من المعرف