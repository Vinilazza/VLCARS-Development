const db = require("../routes/db-config");
module.exports={ 
  displayImage:function(callback){
   // check unique email address
   var sql='select file_data,nome,descricao,preco,modelo,cor from file,carros where idcarro=25 and idcarros=25';
   db.query(sql,function (err, data, fields) {
   if(err) throw err
   return callback(data);
  })
  }
}