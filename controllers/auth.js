const express = require("express");
const register = require("./register")
const login = require("./login")
const user = require("./user")

const router = express.Router();


router.post("/register",register)
router.post("/login",login)
router.post("/user",user)


module.exports = router;