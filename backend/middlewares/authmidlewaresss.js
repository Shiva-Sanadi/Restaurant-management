const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    // Check for token
    if(!token){
        return res.status(401).json({ msg: 'No token, authorization denied'});
    }

    try{
        // Verify token

        // const jwtSecretKey = process.env.JWT_SECRET_KEY;
        // const decoded = jwt.verify(token, jwtSecretKey);
        
        const decoded = jwt.verify(token, config.get('jwtsecret'));
        //Add user from payload
        req.user = decoded;
    next();
    } catch(e){
        res.status(400).json({ msg:'Token is not valid'});
    }
};

// module.exports = auth;

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
  
  // For Admin
const isAdmin = (req, res, next) => {
    auth(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).send("Access denied. Not authorized...");
      }
    });
  };
  
  module.exports = { auth, isUser, isAdmin };

  