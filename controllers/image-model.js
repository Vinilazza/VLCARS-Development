const db = require("../routes/db-config");
module.exports={ 
  displayImage:function(callback){
   // check unique email address
   var sql='SELECT file_data, nome, modelo,descricao,ano,categoria,preco,idcarros from file, carros where file.idcarro=carros.idcarros';
   db.query(sql,function (err, data, fields) {
   if(err) throw err
   return callback(data);
  })
  }
}