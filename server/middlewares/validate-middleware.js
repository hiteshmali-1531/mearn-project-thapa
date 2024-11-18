
const validate = (schema) => async(req,res, next)=>{
    try {
        const  parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const msg = err.errors[0].message;;
        const extraDetail = err.extraDetail;
        console.log(extraDetail)
        const error = {
            status,
            msg,
            extraDetail
        }
        // res.status(400).json({msg : message});
        next(error);
    }
}

module.exports = validate;