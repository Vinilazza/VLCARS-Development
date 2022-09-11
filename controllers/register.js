const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")


module.exports = {
  async register(req, res) {
    const { email, password: Npassword } = req.body
    if (!email || !Npassword) return res.json({ status: "error", error: "Por favor coloque seu email e senha" })
    else {
      db.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
        if (err) throw err;
        if (result[0]) return res.json({ status: "error", error: "Email já esta registrado!" })
        else {
          const hashedPassword = await bcrypt.hash(Npassword, 10);
          db.query('INSERT INTO users SET ?', { email: email, password: hashedPassword }, (error, results) => {

            if (error) throw error;
            return res.json({ status: "success", success: "Usuario cadastrado!" })
          })
        }
      })
    }
  },

  async getUsers(req, res) {
    db.query('SELECT * FROM users', async (err, result) => {
      if (err) throw err;
      return res.json({ status: "success", success: result })
    })
  },

  async insertModel(req, res) {
    const { nome, modelo, cor, ano, categoria } = req.body;
    db.query('INSERT INTO carros SET ?', { nome, modelo, cor, ano, categoria }, async (err, result) => {
      if (err) throw err;
      if (result[0]) return res.json({ status: "error", error: "Ocorreu um erro no cadastro do modelo!" })
    })
    await db.query('SELECT * FROM carros', async (err, result) => {
      if (err) throw err;
      return res.json({ status: "success", success: "O cadastro do modelo de veiculo foi um sucesso!" })
    })
  },
  async insertCategoria(req, res) {
    const { categoria } = req.body;
    if (!categoria) return res.json({ status: "error", error: "Por favor coloque seu email e senha" })
    else {
       db.query("SELECT categoria FROM categoria WHERE categoria = ?",[categoria], async (err, result) => {
      if (err) throw err;
      if (result[0]) return res.json({ status: "error", error: "A categoria já existe!" })
      else {
        db.query('INSERT INTO categoria SET ?', { categoria }, async (err, result) => {
          if (err) throw err;
          return res.json({ status: "success", success: "O cadastro de categoria foi um sucesso!" })
        })
      }
    })
    }
  },
  async getCategoria(req, res) {
    db.query('SELECT * FROM categoria', async (err, result) => {
      if (err) throw err;
      return res.json({ status: "success", success: result})
    })
  },
  async getCar(req, res) {
    db.query('SELECT * FROM carros', async (err, result) => {
      if (err) throw err;
      return res.json({ status: "success", success: result})
    })
  },
}

