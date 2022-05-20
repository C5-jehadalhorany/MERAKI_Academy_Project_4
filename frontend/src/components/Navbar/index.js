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
    const [drop,setDrop]=useState("")

    // const [carname,setCarname]=useState("")

    const { isLoggedIn, setIsLoggedIn, token, setToken, carname, setCarname, newSearch, setNewSearch, dropdown, setDropdown } = useContext(tokenContext)

    const logout = () => {
        localStorage.removeItem('token')
        setToken("")
        setIsLoggedIn(false)
        localStorage.setItem("setIsLoggedIn", false)

    }


    const searchcar = () => {
        console.log(carname);
        axios.get((`http://localhost:5000/cars/c/${carname}`), {
        }).then((result) => {
            //    console.log(result);
            setNewSearch(result.data.result)
            setSearchs(result.data.result)
        }).catch((err) => {
            console.log(err);
        })

    }
    useEffect(() => {
        searchcar()
    }, [carname])


    const dorpdowns =()=>{
        axios.get((`http://localhost:5000/cars/category/${drop}`)).then((result)=>{
        console.log(result);
        setDropdown(result.data.result)
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(() => {
        dorpdowns()
    }, [drop])


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
                setCarname(e.target.value)
                // console.log(searchs);
                const list = searchs && searchs.map((element, index) => {
                    return <div>

                    </div>
                })
                setSearch(list)
            }} />


            <select onChange={(e) => {setDrop(e.target.value)}}>
                <option value=""></option>
                <option value="diesel">diesel</option>
                <option value="petrol">petrol</option>
                <option value="Electricity">Electricity</option>
                <option value="Hybrid">Hybrid</option>
            </select>


        </div>
    )
}
export default Navbar


{/* <Route path="/profile/:id" element={<Profile />} /> */ } // بدي أستخدم هاض الأشي عشان أنتقل من صفحة ل صفحه ثانيه عن طريق الأي دي الي رح يجيني من المعرف