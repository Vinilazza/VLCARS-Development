const db = require("../routes/db-config");
module.exports={ 
  displayImage:function(callback){
   // check unique email address
   const { categoria } = req.body;
   var sql='SELECT file_data from file where id= ?';
   db.query(sql,function (err, data, fields) {
   if(err) throw err
   return callback(data);
  })
  }
}