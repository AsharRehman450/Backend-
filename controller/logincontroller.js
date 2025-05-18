 import  Jwt  from "jsonwebtoken"
import userModel from "../models/UserSchema.js"
import bcrypt from "bcryptjs";
export const logincontroller = async (req,res)=>{
        try {
            const {email,password} =req.body;
if(!email ||!password){
   return res.status(400).json({
        message:"requuired filled are missing"
    })
}
    const emailExist = await userModel.findOne({email})
    if(!emailExist){
        return res.status(400).json({
            message:"email not valid"
        })
    }
    const comparePassword = await bcrypt.compare(password,emailExist.password)
    if(!comparePassword){
         return res.status(404).json({
            message:"passowrd not match"
        })
    }
    const token = Jwt.sign(
        {email:emailExist.email},
        process.env.JWT_SECRET_KEY
    );
    console.log(token);
    
    res.status(200).json({
        message:"login succesfully",
        token
    })

        } catch (error) {
            console.log(error);
            
        }
}