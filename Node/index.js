const express = require('express');
var http = require('http')
const app = express();
var exp = require('./exp');
var url = require('url');
var fS = require('fs');
var formidable = require('formidable');  //upload file
console.log(exp.AddNumber(123, 121));


console.log(exp.tt());
app.get('/', (req, res) => res.send("Test Data send for page"));


http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
                res._write('Success');

                res.end();
            });
        });
    } else {

        fS.readFile('test.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();

        });
    }
    //    TEST BAşlangıc.
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write("DateTime::=>"+exp.CurrentTime());
    //   var q=url.parse(req.url,true).query;
    //   var txt=q.year+""+q.month;
    // yukarıdaki örnek ile query e ıstenılen bılgılerı yolladık
    // ve bu bilgileri res.end(txt) de bastırdık.


    //       res.write(' This part Firts Design   ');
    //     res.write(req.url);//url e ne verdıysek ekrana onu bastırır.
    //     res.end();
    //     Test Bitiş.
}).listen(8080);