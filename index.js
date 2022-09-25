const express = require("express");
const db = require("./routes/db-config");
const app = express();
const ejs = require('ejs');
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 5000;
app.use("/js",express.static(__dirname + "/public/js"));
app.use("/css",express.static(__dirname + "/public/css"));
app.use("/img",express.static(__dirname + "/public/img"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.get("/image/:id", (req, res) => {
  const { id }=req.params;
  const query = "Select file_data From file Where id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    // console.log(Buffer.from(result[0].file_data).toString())
    res.render("imageView", { name: result[0].file_data });
  })
});
app.post("/store", (req, res) => {
  const { image, fileName } = req.body;
  const query = "Insert Into file(file_name, file_data, created_by, created_on) Values(?,?,?,CURRENT_TIMESTAMP)";
  db.query(query, [fileName, image, 'Program'], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ msg:'SERVER_ERROR' });
    }
    res.status(200).send({ id:result.insertId });
  })
});
app.use(cookie());
app.use(express.json());
db.connect((err) => {
  if (err) throw err;
})

app.use("/",require("./routes/pages"))
app.use("/api", require("./routes/apiRoutes"))

app.listen(PORT)

