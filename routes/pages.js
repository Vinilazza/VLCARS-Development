const express = require("express")
const loggedIn = require("../controllers/loggedin")
const router = express.Router();
const db = require("./db-config");
const logout = require("../controllers/logout")
var multer  = require('multer');
var imageModel= require('../controllers/image-model');



router.get("/", loggedIn, (req, res) => {
  if (req.user) {
      res.render("index", { status: "loggedIn", user: req.user })
    } 
    else {
      imageModel.displayImage(function(data){
        res.render("index", { status: "no", user: "nothing", imagePath:data })
      })

  }
})
router.get("/register", (req, res) => {
  res.sendFile("register.html", { root: "./public" })
})
router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./public/" })
})
router.get("/dbconfig", (req, res) => {
  res.sendFile("db-config.js", { root: "./routes/" })
})
router.get("/admin", (req, res) => {
  res.sendFile("admin.html", { root: "./public/" })
})
router.get("/calendar", (req, res) => {
  res.sendFile("calendar.html", { root: "./public/" })
})
router.get("/user", (req, res) => {
  res.sendFile("user.html", { root: "./public/" })
})
router.get("/car", (req, res) => {
  res.sendFile("registerModel.html", { root: "./public/" })
})
router.get("/categoria", (req, res) => {
  res.sendFile("categoria.html", { root: "./public/" })
})
router.get("/sobre", (req, res) => {
  res.sendFile("sobre.html", { root: "./public/" })
})
router.get("/edit", (req, res) => {
  res.sendFile("edit.html", { root: "./public/" })
})
router.get("/vendas", (req, res) => {
  res.sendFile("venda.html", { root: "./public/" })
})
router.get("/search", (req, res) => {
  res.sendFile("search.html", { root: "./public/" })
})
router.get("/logout", logout)

module.exports = router;