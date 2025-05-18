import  Jwt  from "jsonwebtoken";

export const tokenVerification = async(req,res,next)=>{
    try {
      if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);

        const decoded = Jwt.verify(token,process.env.JWT_SECRET_KEY);

        if(decoded){
            next();
        }else{
            res.status(402).json({
                message:"token missing"
            });
        }
            
      }  
    } catch (error) {
        res.status(401).json({
            message:error,
        });
        
    }
};