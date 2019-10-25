const express = require('express');
var http = require('http')
const app = express();
var exp = require('./exp');
var url = require('url');
var fS = require('fs');
var fs1=require('fs');
var fs3=require('fs');
var formidable = require('formidable');  //upload file
console.log(exp.AddNumber(123, 121));


console.log(exp.tt());
app.get('/', (req, res) => res.send("Test Data send for page"));


http.createServer(function (req, res) {
    // //Dosya oluşturma ve  okuma başlangıc 
    // fs1.appendFile('test.txt','İcerik',function(err){
    //     if (err) throw err;
    //     console.log("Saved:test.txt");
    //     });
    // //Dosya oluşturma ve  okuma bitiş
    
    // //Open ornegi başlangıc // aşağıdaki işlemi yaptıktan sonra text in içerisi silinir.
    // fs3.open('test.txt','w',function(err,file){
    //     if(err) throw err;
    //     console.log('Open saved')
    // });
    // //Open ornegi bitis

    // //Dosya secme baslangıc.
    // if (req.url == '/fileupload') {
    //     var form = new formidable.IncomingForm();
    //     form.parse(req, function (err, fields, files) {
    //         var oldpath = files.filetoupload.path;
    //         var newpath = 'C:/Users/ikordis/' + files.filetoupload.name;
    //         fs.rename(oldpath, newpath, function (err) {
    //             if (err) throw err;
    //             res.write('File uploaded and moved!');
    //             res.end();
    //             res._write('Success');

    //             res.end();
    //         });
            
    //     });
    // } else {

    //     fS.readFile('test.html', function (err, data) {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.write(data);
    //         res.end();


    //     });
//}
    //     //Dosya secme bitiş.

        
       

    
    
    //    TEST BAşlangıc.
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("DateTime::=>"+exp.CurrentTime());
    //   var q=url.parse(req.url,true).query;
    //   var txt=q.year+""+q.month;
    // yukarıdaki örnek ile query e ıstenılen bılgılerı yolladık
    // ve bu bilgileri res.end(txt) de bastırdık.


          res.write(' This part Firts Design   ');
       // res.write(req.url);//url e ne verdıysek ekrana onu bastırır.
        res.end();
       // Test Bitiş.
}).listen(8080);