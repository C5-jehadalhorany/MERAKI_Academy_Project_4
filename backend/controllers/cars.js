const cars = require("../models/cars")
const carsModel = require("../models/cars")



// the function for add the cars 
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


// this function fro getAllCars
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



// the function back car in Id 
const getCarById = (req, res) => {
    const { id } = req.params
    carsModel.findById({ _id: id }).populate("_id")
        .exec().then((result) => {
            console.log(result);
            if (result._id == id) {
                res.status(200).json({
                    success: true,
                    message: `car by id `,
                    result: result
                })
            } else {
                res.status(200).json({
                    success: false,
                    message: `No cars Yet`,
                });
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: `Server Error`,
                err: err.message,
            });
        });
}

// the function back car in name
const getCarByName = (req, res) => {
    const { name } = req.body
    carsModel.findOne({ name: name })
        .populate("name")
        .exec()
        .then((result) => {
            console.log(result);
            if (result.name === name) {
                res.status(200).json({
                    success: true,
                    message: `car by name `,
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

const updateCarById = (req, res) => {
    const { _id } = req.params
    carsModel.findByIdAndUpdate(_id, req.body,
        { new: true }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        })
}




// تصدير عشان أشوفه في مكان ثاني وأقدر أخلي الراوتر يشتغل على الفنكشن
module.exports = {
    getAllCar,
    addCar,
    getCarById,
    getCarByName,
    updateCarById
}