import express, { response } from "express";
import AWS from "aws-sdk";
import multer, { memoryStorage } from "multer";

import { ImageModel } from "../../database/allModels";

import { s3Upload } from "../../utility/AWS/s3";

const Router = express.Router(); 

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({storage});

/*
Route               \
Description         uploading the given image to AWS S3 Bucket and
Parameters          _id
Access              Public
Method              POST
*/

Router.post("/", upload.single("file"), async(request,response)=>{
    try {
        const file = req.file;
        const bucketOptions = {
            Bucket: "zomato-fullstack-project",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
        };
        
        const uploadImage = await s3Upload(bucketOptions);
        return response.status(200).json({uploadImage, message:"Image is uploaded!"});
    } 
    catch (error) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;








