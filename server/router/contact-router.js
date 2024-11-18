const express = require("express");
const router = express.Router();
const contactForm = require("../controllerrs/contact-controller");




// router.get('/', home);
router.route("/contact").post(contactForm);






module.exports = router;