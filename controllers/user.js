const db = require("../routes/db-config")

const user = async (req, res) => {
  const {manipulate} = req.body;

  db.query('SELECT * FROM users', async (err, result) => {
    if (err) throw err;
    if (result[0].lenght == 0) return res.json({ status: "error", error: "Não possui nenhum usuario cadastrado" })
    else {
      result[0]
      return res.json({ status: "success", success: "Usuario cadastrado" })
    }
  })
}

module.exports = user;