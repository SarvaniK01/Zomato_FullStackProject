import express, { request } from "express";

import { UserModel } from "../../database/allModels";

const Router = express.Router();

/*
Route               /
Description         Get User details using id
Parameters          _id
Access              Public
Methods             GET
*/

Router.get("/:_id", async(request,response)=>{
    try {
        const {_id} = request.params;
        const getUser = await UserModel.findById(_id);
        
        return response.json({user: getUser});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});
    }
});


/*
Route               /update
Description         Update User data
Parameters          userId
Access              Public
Methods             PUT
*/

Router.put("/update/:userId", async(request,response)=>{
    try {
        const { userId } = request.params;
        const { userData } = request.body;

        const updateUserData = await UserModel.findByIdAndUpdate(
            userId,
            {
                $set: userData
            },
            {
                new:true
            }
        )

        return response.json({user: updateUserData, message:"Your fullname has been updated successfully!"});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});   
    }
});


export default Router;
