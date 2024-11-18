const User = require('../models/User');
const Contact = require('../models/Contact');


const getAllUsers = async(req, res) =>{
    try {
        let Users = await User.find({},{password: 0});
        if(!Users || Users.length === 0){
            return res.status(404).json({msg:"No users found"});
        }
        res.status(200).json(Users);

        
    } catch (error) {
        res.status(501).json({msg : "Internal Server Error"});
    }
}

const editUserById = async(req,res) =>{
    const {username, email, phone} = req.body;
    try {
        // console.log(username, req.body);
        const id = req.params.id;
        const updateUser = await User.findByIdAndUpdate({_id:id},{$set:{username,email,phone}})
        // console.log(updateUser);
        res.status(200).send({msg:"user is updated successfully", updateUser});
    } catch (error) {
        res.status(500).send({msg:"internal server error", error});
    }
 
}

const getUserById = async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.findById({_id:id});
        if(user){

            return res.status(200).send({msg: "find user successfully", user});
        }
        res.status(404).send({msg:"User is not found"});
    } catch (error) {
        res.status(500).send({msg:"internal server error"});
    }
}
const deleteUserById = async(req,res) =>{
    try {
        const id = req.params.id;
        // console.log(id);
    
        const response = await User.findByIdAndDelete({_id: id});
        // console.log(response);
        res.status(200).send({response, msg: "user Deleted successfully"});

    } catch (error) {
        // console.log(error);
        res.status(500).send({msg : "internal server error"});
    }
}

const getAllContacts = async(req, res) => {
    try {
        let contacts  =  await Contact.find();
        if(!contacts || contacts.length === 0) {
            return res.status(404).json({msg : "Contacts are not found"});
        }
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({msg : "Internal Server Error"});
    }
}

const deleteContactById = async(req,res)=>{
    try {
        let id = req.params.id;
        let result = await Contact.findByIdAndDelete({_id:id});
        // console.log(result);
        if(result){
            res.status(200).send({msg: "Contact deleted successfully"})
        }else{
            res.status(404).send({msg: "Contact not found"});
        }
    } catch (error) {
        res.status(500).send({msg:"Internal Server Error", error});
        
    }
}

module.exports = {getAllUsers, getAllContacts,deleteUserById,getUserById,editUserById,deleteContactById};