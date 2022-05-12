import React from 'react'
import { Link, useNavigate } from "react-router-dom";





export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            
            <Link to="/Login">Login</Link>

            <Link to="/Register">Register</Link>

            <Link to="/">HomePage</Link>

            <Link to="/"></Link>

            <button
                onClick={() => {
                    navigate(-1);
                }}
            >
                Back
            </button>
        </div>
    )
}
export default Navbar