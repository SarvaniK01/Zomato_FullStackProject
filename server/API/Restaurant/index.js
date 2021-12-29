import express, { request, response } from "express";

//Models
import { RestaurantModel } from "../../database/restaurant";

//Validations
import { ValidateRestaurantId, ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant";

const Router = express.Router();

/*
Route               /
Description         Get all the restaurant details
Parameters          none
Access              Public
Method              GET
*/

Router.get("/", async(request,response)=>{
    try {
        await ValidateRestaurantCity(request.query);
        const {city} = request.query();
        const restaurants = await RestaurantModel.find({city});
        return response.json({restaurants});    
    } 
    catch (error) {
        return response.status(500).json({error: error.message});
    }
});


/* 
Route              /    
Description         Get particular restaurant details based on id
Parameters          _id
Access              Public
Method              GET
*/

Router.get("/:_id", async(request,response)=>{
    try {
        await ValidateRestaurantId(request.params);
        const {_id} = request.params;
        const restaurant = await RestaurantModel.findOne({_id});
        return response.json({restaurant});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});
    }
});

/*
Route           /search
Description     Get a restaurant by searching in search bar
Parameters      searchString
Access          Public
Method          GET
*/

Router.get("/search", async(request,response)=>{
    try {
        await ValidateRestaurantSearchString(request.body);
        const {searchString} = request.body;
        const restaurants = await RestaurantModel.find({
            name: {$regex: searchString, options:"i"}
        });  
        return response.json({restaurants}); 
    } 
    catch (error) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;

