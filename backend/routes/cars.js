const express= require("express");

const {getAllCar,addCar,getCarById,getCarByName,updateCarById}=require("../controllers/cars");

const carsRouter =express.Router();




// all this function for cars 
// this fot back car in name
carsRouter.get("/name",getCarByName)

//just the Id car 
carsRouter.get("/:id",getCarById)

//for getallcar
carsRouter.get("/",getAllCar);

// for add
carsRouter.post("/",addCar);

//for update
carsRouter.put("/:id",updateCarById)





module.exports =carsRouter;
