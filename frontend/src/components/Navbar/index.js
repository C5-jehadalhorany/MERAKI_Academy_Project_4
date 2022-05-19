import './style.css';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import image from "./logoss.jpg"
import { useState, useEffect, useContext } from 'react'
import { tokenContext } from '../../App'
import axios from 'axios'
import { useParams } from "react-router-dom";

export const Navbar = () => {


    const navigate = useNavigate();

    const [searchs, setSearchs] = useState([]);
    const [search, setSearch] = useState([]);
    const [carname,setCarname]=useState("")

    const { isLoggedIn, setIsLoggedIn, token, setToken } = useContext(tokenContext)

    const logout = () => {
        localStorage.removeItem('token')
        setToken("")
        setIsLoggedIn(false)
        localStorage.setItem("setIsLoggedIn", false)

    }


    const searchcar = () => {

        axios.get((`http://localhost:5000/cars/${carname}`), {
        }).then((result) => {
            console.log(result);
            setSearchs(result.data.result)
        }).catch((err) => {
            console.log(err);
        })

    }
    useEffect(() => {
        searchcar()
    }, [])



    return (
        <div className='Navbardiv'>
            <img src={image} className="logo"></img>
            <Link to="/">HomePage</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Dashboard/:id">details</Link>
            <Link to="/" onClick={logout}>LogOut</Link>

            <input type="text" placeholder='Search' onChange={(e) => {
                console.log(true);
                setCarname(e.target.value)
                console.log(searchs);
                const list = searchs && searchs.map((element) => {
                    return <div>
                        <p >{element.name}</p>
                    </div>
                })
                setSearch(list)
            }} />
            {search}




        </div>
    )
}
export default Navbar


{/* <Route path="/profile/:id" element={<Profile />} /> */ } // بدي أستخدم هاض الأشي عشان أنتقل من صفحة ل صفحه ثانيه عن طريق الأي دي الي رح يجيني من المعرف