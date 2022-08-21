const db = require("/dbconfig")

db.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM carros", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});