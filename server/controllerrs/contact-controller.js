const Contact = require("../models/Contact");


const contactForm = async(req,res)=>{
    try {
        
        const response = req.body;
        console.log(response)
        const result = await Contact.create(response);
        // res.status(200).json({message:"message send successfully"});
        res.status(200).json({msg: "message send successfully"});

    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "message not delivered"});
    }
}

module.exports = contactForm;