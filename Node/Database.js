var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   })


//İlk db oluşturma işlemi.


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

});


//Bir diğer yöntem ise aşağıdaki gibidir.
//Aşağıdaki kısım da mongoose yapısı ile olşturuldu.
// var mongoose=require('mongoose');

// mongoose.connect('mongodb://localhost:27017/TestDB2',(err)=>{
//     if(!err)
//     console.log('MongoDB Success');
//     else
//     console.log('Not Success')+JSON.stringify(err,undefined(),2);
// });

module.exports=MongoClient;

