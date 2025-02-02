const JWT = require('jsonwebtoken');

// protected routes token base
export const requireSignin = async (req,res,next) => {
    try{
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        next();
    }catch(error){
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:"error in admin midleware",
        });
    }
};


// For User Profile
const isUser = (req, res, next) => {
    auth(req, res, () => {
      if (req.user._id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).send("Access denied. Not authorized...");
      }
    });
  };
  


// not connected this code to any file