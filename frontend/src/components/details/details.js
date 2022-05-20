import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./style.css"
import { Link, useNavigate } from "react-router-dom";


const Details = () => {
    const navigate = useNavigate();
    const [details, setDetails] = useState([])

    let { id } = useParams()

    const [categorying, setCategorying] = useState("")

    const getcarbyId = () => {
        axios.get((`http://localhost:5000/cars/${id}`), {

        }).then((result) => {
            // console.log(result);
            setDetails(result.data.result)
        
        //    console.log(result.data.result.status);
        setCategorying(result.data.result.categoryer.category)
        }).catch((err) => {
            console.log(err);
        })


    }
    useEffect(() => {
        getcarbyId()
    }, [])

    // const detail = details && details.map((Eelement, index) => {

    // })

    return <div className="contDiv">
        {/* {detail} */}
        <div><img src={details.img} className="detDiv" />
        </div>
        <div >
            <button className="clickDiv"
                onClick={() => {
                    navigate(-1);
                }}
            >
                Back
            </button>
        </div >

        <div className="allDet">
            <h1 className="p">{details.name}</h1>
            <h3 className="alldeta">Model({details.model})</h3>

            <p className="alldeta">Description({details.description})</p>
            <h3 className="alldeta">Status({details.status + ""})</h3>
            <h3 className="alldeta">categoryer({categorying})</h3>
            <h3 className="alldeta">Price({details.pirce})</h3>
        </div>
        

    </div>
}




export default Details