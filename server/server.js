let env = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoute = require('./router/auth-router');
const connectDb = require('./db');
const errorMiddleware = require('./middlewares/errore-middleware');
const contactRoute = require('./router/contact-router');
const adminRoute = require('./router/admin-router');
const serviceRoute = require('./router/service-router');


// console.log(env)

const corsOptions = {
    origin: 'http://localhost:5173',
    method: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials : true
}

const app = express();
// handling cors policy for client requests 
app.use(cors(corsOptions));

app.use(express.json()); // its Accept req.body portion conatain json body with request
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data",serviceRoute );
app.use("/api/admin", adminRoute );

app.use(errorMiddleware);
connectDb().then((res) => {

    app.listen(3000, () => {
        console.log("server listening on port 3000");
    })

})

