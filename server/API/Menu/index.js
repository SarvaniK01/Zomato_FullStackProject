import express, { request, response } from "express";

import { MenuModel } from "../../database/allModels";
import { ImageModel } from "../../database/image";


const Router = express.Router();


/*
Route               \list
Description         Get list of menu based on id
Parameters          _id
Access              Public
Method              GET
*/

Router.get("/list/:_id", async(request,response)=>{
    try {
        const {_id} = request.params;
        const menus = await MenuModel.findOne(_id);
        
        return response.json({menus});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});
    }
})

/* 
Route                   /image
Description             Get image of menu based on id
Parameters              _id
Access                  Public
Method                  GET
*/

Router.get("/image/:_id", async(request,response)=>{
    try {
        const {_id} = request.params;
        const menuImage = await ImageModel.findOne(_id);
        
        return response.json({menuImage});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;

