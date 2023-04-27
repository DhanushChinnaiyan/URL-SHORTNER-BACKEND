import express from 'express';
import bcrypt from 'bcrypt';


const router = express.Router()

// Url shortning
router.post("/",async(request,response)=>{
    try {
        
        
    } catch (error) {
        console.log("Internal server error")
        return response.status(500).json({message:"Internal server error"})
       
    }
})