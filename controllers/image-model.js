const db = require("../routes/db-config");
module.exports={ 
  displayImage:function(callback){
   // check unique email address
   var sql='SELECT file_data, nome, modelo from file, carros where file.nomes=carros.nome';
   db.query(sql,function (err, data, fields) {
   if(err) throw err
   return callback(data);
  })
  }
}