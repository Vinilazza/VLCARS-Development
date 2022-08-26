const jwt = require("jsonwebtoken")
const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")
const reg = require("../controllers/register")


const login = async (req,res) =>{
  const {email,password} = req.body
  if (!email || !password) return res.json({ status: "error", error: "Por favor coloque seu email e senha" })
  else {
    db.query('SELECT * FROM users WHERE email = ?',[email], async(Err,results) => {
      if(results[0] == undefined) return res.json({status: "error", error: "Email ou senha incorreto"})
      else {
      const hashedPassword = results[0].password
      //get the hashedPassword from result
            if (!results.length || !await bcrypt.compare(password, hashedPassword)) return res.json({status: "error", error: "Email ou senha incorreto"})
      else {
        const token = jwt.sign({id: results[0].id},process.env.JWT_SECRET,{
          expiresIn:process.env.JWT_EXPIRES
        })
        const cookieOptions = {
          expiresIn: new Date(Date.now()+process.env.COOKIE_EXPIRS * 24 * 60 * 60 * 1000),
          httpOnly:true
        }
        res.cookie("userRegistered", token,cookieOptions)
        return res.json({status:"success",success: "User has ben logged in"})
        
      }}
    })
  }
}
module.exports = login;