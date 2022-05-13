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

        </div>
    )
}
export default Navbar