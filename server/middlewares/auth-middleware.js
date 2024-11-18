const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async(req,res, next) =>{
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({msg : "Unauthorized HTTP, Token not provided"});
    }
    const jwtToken = token.replace("Bearer", "").trim();
    console.log('token from auth middleware ' +jwtToken);
    try {
        const isVerified = jwt.verify(jwtToken, "hiteshmali" );
        let data = await User.findById(isVerified.userId).select({
            password: 0
        });
        // console.log(data);
        req.user = data;
        req.token = token;
        req.userID = data._id;
        next();
    } catch (error) {
        return res.status(401).json({msg : "user is An Authorized please login again"});
    }
}


module.exports = authMiddleware;