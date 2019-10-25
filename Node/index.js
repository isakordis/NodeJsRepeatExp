const express = require('express');
var http = require('http')
const app = express();
var exp = require('./exp');
var url = require('url');
var fs = require('fs');
var fs1=require('fs');
var fs3=require('fs');
var formidable = require('formidable');  //upload file
var bodyparser=require('body-parser');
var mailRoutes=require('./routes.js')

console.log(exp.AddNumber(123, 121));

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
console.log(exp.tt());
app.get('/', (req, res) => res.send("Test Data send for page"));
mailRoutes(app)
// http.createServer(function (req, res) {
//     // //File create and read started 
//     // fs1.appendFile('test.txt','İcerik',function(err){
//     //     if (err) throw err;
//     //     console.log("Saved:test.txt");
//     //     });
//     // //File create and read finished
    
//     // //Open exp started //when following op. do then Text file inside deleted..
//     // fs3.open('test.txt','w',function(err,file){
//     //     if(err) throw err;
//     //     console.log('Open saved')
//     // });
//     // //Open exp finished


    
//     //    TEST start.
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write("DateTime::=>"+exp.CurrentTime());
//     //   var q=url.parse(req.url,true).query;
//     //   var txt=q.year+""+q.month;
//     // query want to info 
//     // and write op. is req.end inside.


//           res.write(' This part Firts Design==>');
//        res.write(req.url);//as pipe . URl side writing query.
//         res.end();

//        // Test Finished.

//        //Rename File Start
//        fs.rename('werwerwer.txt','111.txt',function(err){
//         if(err) throw err;
//         console.log('Rename success');
//     });
//     //Rename Fİle Finish
// })
app.listen(8080);