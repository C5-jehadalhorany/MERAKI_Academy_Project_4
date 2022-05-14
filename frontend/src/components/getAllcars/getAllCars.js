import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { tokenContext } from '../../App'




const Asc = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(tokenContext)
    console.log(isLoggedIn);
    const navigate = useNavigate();
    const [cars, setAllcars] = useState([])

    const Allcars = () => {
        axios.get(("http://localhost:5000/cars")
            , {
            }).then((result) => {
        
                setAllcars(result.data.result)
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        Allcars()
    }, [])

    console.log(cars);
    const list = cars && cars.map((elemnet, index) => {
        console.log(isLoggedIn);
        // console.log(elemnet.img);

        return <div >
            <img src={elemnet.img} onClick={() => isLoggedIn === true ? navigate("/")  : navigate("/Login")} />
            {/* <p>{elemnet.name}</p>
            <p>{elemnet.model}</p>
            <p>{elemnet.description}</p>
            <p>{elemnet.status}</p>
            <p>{elemnet.category}</p> */}

        </div>
    })

    return <div>
        {list}
    </div>
}
export default Asc


/*
{isLoggedIn ? (
        <div style={{ display: "flex", gap: "20px" }}>
         
          <Link to="/dashbord/">Dashbord</Link>
           <Link to="/newArticle">Add New Article</Link>  
          <Link to="/login" onClick={logOut}>logout</Link>
        </div>
      ) : (
        <div  style={{ display: "flex", gap: "20px" }}>
        
          <Link to="/Register/">Register</Link>
          <Link to="/login">login</Link>{" "}
        </div>
      )}

*/