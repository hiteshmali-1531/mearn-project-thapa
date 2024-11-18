const mongoose = require('mongoose');


let URI = 'mongodb://127.0.0.1:27017/mern_admin';
URI =process.env.URI
// console.log(process.env.URI)
// URI = "mongodb+srv://hiteshmali1531:H%40i%40te%40sh1%401234@test.wbohmfa.mongodb.net/mern-thapa?retryWrites=true&w=majority"

const connectDb = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("connection successful to DB");
        
    } catch (error) {
        console.error("database connection error", error)
        process.exit(0);
    }
}


module.exports = connectDb;
