import express from "express";
import { mongoose } from "mongoose";
import bcrypt from "bcryptjs";

//Models
import { UserModel } from "../../database/user";

//
import { ValidateSignUp, ValidateSignIn } from "../../validation/auth";

//for defining routes and APIs 
const Router = express.Router();

/*
Route               /signup
Description         Signup using email and password
Parameters          None
Access              Public
Method              POST
*/

Router.post("/signup", async(request,response) =>{
    try {
        await ValidateSignUp(request.body.credentials); 
        const {fullname, email, password, phoneNumber} = request.body.credentials;

        const checkByEmail = await UserModel.findOne({email});
        
        const checkByPhone = await UserModel.findOne({phoneNumber});

        if (checkByEmail || checkByPhone){
            return response.json({error: "User Already exists. Please Login with your Credentials"});
        }

        // Save to Database
        await UserModel.create({
            ...request.body.credentials,
            password:hashedPassword
        });

        // To hash the password
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        // JWT token
        const token = jwt.sign({user: {fullname, email}}, "ZomatoApp");

        return response.status(200).json({token, status:"Success!"});

    } 
    catch (error) {
        return response.status(500).json({error: console.error(message)})
    }
})


/*
Route               /signin
Description         Signin using email and password
Parameters          None
Access              Public
Method              POST
*/

Router.post("/signin", async(request,response)=>{
    try {
        await ValidateSignIn(request.body.credentials);
        
        const user = await UserModel.findByEmailAndPassword(
            request.body.credentials
        );

        const token = user.generateJwtToken();

        return response.status(200).json({token, message:"Successfully generated token"});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});
    }
});




