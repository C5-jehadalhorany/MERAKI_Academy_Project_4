import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./style.css"


const Details = () => {
    const [details, setDetails] = useState([])
    let { id } = useParams()


    const getcarbyId = () => {
        axios.get((`http://localhost:5000/cars/${id}`), {

        }).then((result) => {
            // console.log(result);
            setDetails(result.data.result)
            console.log(result.data.result);
        }).catch((err) => {
            console.log(err);
        })


    }
    useEffect(() => {
        getcarbyId()
    }, [])

    // const detail = details && details.map((Eelement, index) => {

    // })

    return <div>
        {/* {detail} */}
        <div><img src={details.img} className="detDiv" />
        </div>

        <div className="allDet">
            <h1 className="p">{details.name}</h1>
            <p>{details.model}</p>
            <p>{details.description}</p>
            <p>{details.status}</p>
            <p>{details.category}</p>
        </div>

    </div>
}




export default Details