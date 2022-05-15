import './style.css';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";


export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Link to="/">HomePage</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Dashboard">Dashboard</Link>
            
            <Link to="/Dashboard/:id">details</Link>
    


        </div>
    )
}
export default Navbar


{/* <Route path="/profile/:id" element={<Profile />} /> */} // بدي أستخدم هاض الأشي عشان أنتقل من صفحة ل صفحه ثانيه عن طريق الأي دي الي رح يجيني من المعرف