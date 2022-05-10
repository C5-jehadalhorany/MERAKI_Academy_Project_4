const express= require("express");

const {getAllCar,addCar}=require("../controllers/cars");

const carsRouter =express.Router();


carsRouter.get("/",getAllCar);

carsRouter.post("/",addCar);

module.exports =carsRouter;
