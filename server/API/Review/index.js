import express from "express";

import { ReviewModel } from "../../database/reviews";

const Router = express.Router();


/*
Route               /review
Description         Post a review using id
Parameters          _id
Access              Public
Methods             POST
*/

Router.post("/review/:_id", async(request,response)=>{
    try {
        const { newReview } = request.body;
        const addNewReview = ReviewModel.create(newReview);
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

Router.delete("/review/delete/:_id", async(request,response)=>{
    try {
        const deleteId = request.params._id;
        const deleteReview = await ReviewModel.findOneAndDelete(deleteId);

        return response.json({deleteReview, message:"Your review has been deleted"});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});    
    }
});


export default Router;
