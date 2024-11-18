const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcryptJS = require('bcryptjs');
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    isAdmin:{
        type:Boolean,
        default: false
    }
})

//secure the password 
userSchema.pre('save', async function(next){
    // console.log("pre method "+this)
    const User = this;
    if(!User.isModified('password')){
        next();
    }

    try {
        const saltRound = await bcryptJS.genSalt(10);
        const hash_password = await bcryptJS.hash(User.password, saltRound);
        User.password  = hash_password;
    } catch (error) {
        console.log(error);

    }
})


userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId : this._id.toString(),
            email: this.email,
            isAdmin : this.isAdmin
        }, "hiteshmali",{
            expiresIn: "30d"
        })
    } catch (error) {
        console.log(error);
        // console.log(error);
    }
}

userSchema.methods.comparePassword = async function (password){
    const user = await bcryptJS.compare(password, this.password);
    return user;
}

const User = new mongoose.model('User',userSchema);

module.exports = User;