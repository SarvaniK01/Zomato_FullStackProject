import express, { request, response } from "express";

import { FoodModel } from "../../database/allModels";

const Router = express.Router();

/* 
Route               /
Description         Get all foods based on restaurant
Parameters          _id
Access              Public
Method              GET
*/

Router.get("/:_id", async(request,response)=>{
    try {
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

















