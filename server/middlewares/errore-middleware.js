const errorMiddleware = (err, req,res, next) =>{
    const status = err.status || 500;
    // console.log(err.status+"hello");
    const message = err.msg || "BACKEND ERROR";
    const extraDetail = err.extraDetail || "Errore from backend";

    return res.status(status).json({message, extraDetail});
}


module.exports = errorMiddleware;