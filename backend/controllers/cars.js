const cars = require("../models/cars")
const carsModel = require("../models/cars")

const getAllCar = (req, res) => {
    carsModel.find({}).then((result) => {
        if (cars.length) {
            res.status(200).json({
                success: true,
                message: `All the cars`,
                result: result
            })
        } else {
            res.status(200).json({
                success: false,
                message: `No cars Yet`,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
        });
    })
}


const addCar = (req, res) => {
    const { name, model, pirce, description, status } = req.body
    const car = new carsModel({
        name: name,
        model: model,
        pirce: pirce,
        description: description,
        status: status
    })
    car.save().then((result) => {
        res.status(201).json({
            success: true,
            message: `car Created Successfully`,
            result: result
        })
    }).catch((err) => {
        res.status(409).json({
            success: false,
            message: `The car already exists`,
        });
    })

}



module.exports = {
    getAllCar,
    addCar
}