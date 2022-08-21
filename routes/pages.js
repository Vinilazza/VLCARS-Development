const express = require("express")
const loggedIn = require("../controllers/loggedin")
const router = express.Router();
const logout = require("../controllers/logout")

router.get("/",loggedIn, (req,res) => {
  if(req.user){
    res.render("index",{status: "loggedIn",user:req.user})
  }else {
    res.render("index",{status: "no",user: "nothing"})
  }
})
router.get("/register", (req,res) => {
  res.sendFile("register.html", {root: "./public"})
})
router.get("/header", (req,res) => {
  res.sendFile("header.html", {root: "./global"})
})
router.get("/login", (req,res) => {
  res.sendFile("login.html", {root: "./public/"})
})
router.get("/css", (req,res) => {
  res.sendFile("style.css", {root: "./public/css"})
})
router.get("/logout",logout)

module.exports = router;