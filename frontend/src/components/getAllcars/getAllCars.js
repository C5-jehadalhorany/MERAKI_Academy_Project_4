import axios from "axios";
import React, { useContext, useState, useEffect } from "react";





const Asc = () => {

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
        console.log(elemnet.img);
        return <div>
            <img src={elemnet.img} ></img>
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