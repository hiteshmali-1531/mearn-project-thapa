

const adminMiddleware = async (req,res, next) =>{
    try {
        
        console.log(req.user);
        let isAdmin = req.user.isAdmin;
        if(isAdmin){

            next();
        }else{
            res.status(400).send({msg:"Unauthorized User"});
        }
    } catch (error) {
        res.status(500).send({msg:"internal error"})
    }
}

module.exports = adminMiddleware;