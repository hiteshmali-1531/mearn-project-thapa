const express = require("express");
const {home, register, login,user} = require("../controllerrs/auth-controller");
const router = express.Router();
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validator/auth-validator");
const authMiddleware = require("../middlewares/auth-middleware");

// router.get('/', home);
router.route("/").get(home);


// router.route('/user').get((req,res) =>{
//     res.send("<h1>Hello i am user page</h1>")
// })


router.route('/register').get(register);

router.route('/register').post(validate(signupSchema),register);

router.route('/login').post(login);


router.route('/user').get(authMiddleware,user)


module.exports = router;