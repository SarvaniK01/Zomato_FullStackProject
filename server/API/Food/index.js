import express, { request, response } from "express";

//Models
import { FoodModel } from "../../database/allModels";

//Validations
import { ValidateRestaurantId, ValidateCategory } from "../../validation/food";


const Router = express.Router();

/* 
Route               /
Description         Get all foods based on restaurant id
Parameters          _id
Access              Public
Method              GET
*/

Router.get("/:_id", async(request,response)=>{
    try {
        await ValidateRestaurantId(request.params);
        const { _id } = request.params;
        const foods = await FoodModel.find({restaurant: _id});
        return response.json({foods});  
    } 
    catch (error) {
        return response.status(500).json({error: error.message});
    }
});


/*
Route           /r
Description     Get all the foods based on particular category
Parameters      category
Access          Public
Method          GET
*/

Router.get("/r/:category", async(request,response)=>{
    try {
        await ValidateCategory(request.params);
        const { category } = request.params;
        const foods = await FoodModel.find({
            category: {$regex: category, options="i"}
        });
        return response.json({foods});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;

















