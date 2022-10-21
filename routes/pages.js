const express = require("express")
const loggedIn = require("../controllers/loggedin")
const router = express.Router();
const db = require("./db-config");
const logout = require("../controllers/logout")

router.get("/", loggedIn, (req, res) => {
  if (req.user) {
    const query = "Select file_data From file where id=1";
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(Buffer.from(result[0].file_data).toString())
      res.render("index", { status: "loggedIn", user: req.user,name: result[0].file_data })
    })
    
  } else {
    const query = "Select file_data From file where id=1";
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(Buffer.from(result[0].file_data).toString())    
      res.render("index", { status: "no", user: "nothing",name: result[0].file_data })
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