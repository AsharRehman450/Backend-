 import userModel from "../models/UserSchema.js"
import bcrypt from "bcryptjs"
export const signupcontroller = async (req,res)=>{
    try {
        const {firstName,lastName,email,password} =req.body
        if(!firstName || !lastName || !email || !password ){
          return res.status(400).json({
                message:"required filled are missing"
            })
        }
        const emailExist = await userModel.findOne({email})
        if(emailExist !=null){
           return  res.status(400).json({
                message:"email already exist"
            })
        }
        const encrptPassword  = await bcrypt.hash(password,10)
        console.log(encrptPassword);

        let userObj ={
            firstName,
            lastName,
            email,
            password:encrptPassword
        }
        console.log(userObj);

        const saveData = await userModel.create(userObj)
        
        
    res.status(200).json({
        message:"all ok",
        saveData
    })
        
    } catch (error) {
        console.log(error);
        
    }
}