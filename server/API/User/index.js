import express, { request } from "express";

import {UserModel} from "../../database/allModels";

const Router = express.Router();

/*
Route               /user
Description         Get User details using id
Parameters          _id
Access              Public
Methods             GET
*/

Router.get("/users/:_id", async(request,response)=>{
    try {
        const {_id} = request.params;
        const user = await UserModel.findOne(_id);
        
        return response.json({user});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});
    }
});


/*
Route               /user/update
Description         Get User details using id
Parameters          _id
Access              Public
Methods             PUT
*/

Router.put("/user/update/:_id", async(reques,response)=>{
    try {
        const updatedUser = await UserModel.findOneAndUpdate(
            {
                _id : request.params._id
            },
            {
                fullname: request.body.fullname
            },
            {
                new:true
            }
        );

        return response.json({updatedUser, message:"Your fullname has been updated successfully!"});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});   
    }
});


export default Router;
