import express from "express";

import { ReviewModel } from "../../database/reviews";

const Router = express.Router();


/*
Route               /new
Description         Add new review
Parameters          none
Access              Public
Methods             POST
*/

Router.post("/new", async(request,response)=>{
    try {
        const { reviewData } = request.body;

        await ReviewModel.create(reviewData);

        return response.json({reviewText: addNewReview, message: "Your Review has been successfully added!"});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});    
    }
});


/*
Route               /review/delete
Description         Delete a review using id
Parameters          _id
Access              Public
Methods             DELETE
*/

Router.delete("/delete/:_id", async(request,response)=>{
    try {
        const {_id} = request.params;

        await ReviewModel.findByIdAndDelete(_id);

        return response.json({message:"Your review has been deleted"});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});    
    }
});


export default Router;
