import './style.css';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import image from "./logoss.jpg"
import { useState, useEffect, useContext } from 'react'
import { tokenContext } from '../../App'
import axios from 'axios'
import { useParams } from "react-router-dom";

export const Navbar = () => {
    let { id } = useParams()
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [searchs, setSearchs] = useState([]);

    const { isLoggedIn, setIsLoggedIn, token, setToken } = useContext(tokenContext)

    const logout = () => {
        localStorage.removeItem('token')
        setToken("")
        setIsLoggedIn(false)
        localStorage.setItem("setIsLoggedIn", false)

    }



    const search = () => {
        axios.get(("http://localhost:5000/cars/name"),{

        }).then((result)=>{
            setSearchs(result)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const dropdownlist = (e) => {
        axios.get((`http://localhost:5000/cars/category/${id}`), {

        }).then((result) => {
            console.log(result);
            setValue(result.data.result)
        }).catch((err) => {
            console.log(err);
        })


    }

    return (
        <div className='Navbardiv'>
            <img src={image} className="logo"></img>
            <Link to="/">HomePage</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Dashboard/:id">details</Link>
            <Link to="/" onClick={logout}>LogOut</Link>

            <input type="text" placeholder='Search' onChange={search} />


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