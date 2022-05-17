import './style.css';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import image from "./logoss.jpg"
import { useState, useEffect } from 'react'

export const Navbar = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const Search = () => {

    }

    const dropdownlist = (e) => {
        setValue(e.target.value)

    }

    return (
        <div className='Navbardiv'>
            <img src={image} className="logo"></img>
            <Link to="/">HomePage</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Dashboard/:id">details</Link>
            <Link to="/">Logout</Link>

            <input type="text" placeholder='Search' onChange={Search} />
            

            <select onChange={dropdownlist}>
                <option value="Hybrid">Hybrid</option>
                <option value="diesel">diesel</option>
                <option value="petrol">petrol</option>
                <option value="Electricity">Electricity</option>
            </select>

           

        </div>
    )
}
export default Navbar


{/* <Route path="/profile/:id" element={<Profile />} /> */ } // بدي أستخدم هاض الأشي عشان أنتقل من صفحة ل صفحه ثانيه عن طريق الأي دي الي رح يجيني من المعرف