import './style.css';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import image from "./logoss.jpg"


export const Navbar = () => {
    const navigate = useNavigate();

    const Search = () => {
    
    }


    return (
        <div className='Navbardiv'>
            <img src={image} className="logo"></img>
            <Link to="/">HomePage</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Dashboard/:id">details</Link>
            <input placeholder='Search' onChange={Search} />
            


        </div>
    )
}
export default Navbar


{/* <Route path="/profile/:id" element={<Profile />} /> */ } // بدي أستخدم هاض الأشي عشان أنتقل من صفحة ل صفحه ثانيه عن طريق الأي دي الي رح يجيني من المعرف