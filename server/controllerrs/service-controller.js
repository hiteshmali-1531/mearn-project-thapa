const Service = require('../models/Service');

const services = async(req,res)=>{
    try {
        
        const data = await Service.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(501).json({msg: "internal server error"});
    }
}

module.exports = services;