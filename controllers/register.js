const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")


const register = async (req, res) => {
  const { email, password: Npassword } = req.body
  if (!email || !Npassword) return res.json({ status: "error", error: "Por favor coloque seu email e senha" })
  else {
    db.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
      if (err) throw err;
      if (result[0]) return res.json({ status: "error", error: "Email já esta registrado!" })
      else {
        const hashedPassword = await bcrypt.hash(Npassword,10);
        db.query('INSERT INTO users SET ?', { email: email, password: hashedPassword }, (error, results) => {
      
          if(error) throw error;
          return res.json({status: "success",success: "Usuario cadastrado!"})
        })
      }
      })
  }
}

module.exports = register;