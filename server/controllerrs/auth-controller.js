

const User = require('../models/User');


const home = async(req, res) =>{
    try {
        res.status(200).send("welcome to constroller page");
    } catch (error) {
        console.log(error);
    }
}
const register = async(req, res,next) =>{
    try {
    //    console.log(req.body);
        const {username, email, password, phone} = req.body;

        const userExits = await User.findOne({email: email});
        // console.log(userExits)
        
        if(userExits){
            return res.status(400).json({msg : "email is already exists"});
            // next({msg : "email is already exists",extraDetail: "fill details properly"})
        }

        // hash the password 
       
        // console.log(hash_password);

        const userData = await User.create({phone, username, email, password });
       
       res.status(201).json({msg: "registration successfull", token: await userData.generateToken(), userId:userData._id.toString()});
    // res.json({msg:"Hitesh"})
    } catch (error) {
        console.log(error);
        // next({msg:"errore in registration please try again",extraDetail:"internal server error",status: 422});
        next(error);
    }
}


const login = async(req, res,next) =>{
    // res.status(200).send("login page")
    try {
        const {email , password} = req.body;
        const userExits= await User.findOne({email});
        if(!userExits){
            return res.status(400).json({msg: "this email id is not exist please register first", extraDetail:"fill details properly", status: 400});
            // next({msg: "this email id is not exist please register first", extraDetail:"fill details properly", status: 400})
        }
        

        const user = await userExits.comparePassword(password);
        if(user){
            res.status(200).json({
                msg: "login successful",
                token : await userExits.generateToken(),
                userId: userExits._id.toString()
        });
        }else{
            return res.status(400).json({msg: "Invalid Credentials"});
        }
    } catch (error) {
        // res.status(500).json({msg: 'internal server error'})
        next({msg:"errore in Login please try again",extraDetail:"internal server error",status: 422});
    }
}

// user logic to send user data  

const user = (req, res)=>{
    try {
        const userData = req.user;
        return res.status(200).json({msg: userData})
    } catch (error) {
        console.log("error from the user route: " + error);
    }
}

module.exports = {home, register, login, user};