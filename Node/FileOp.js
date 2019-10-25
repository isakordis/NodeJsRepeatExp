

http.createServer(function (req, res) {
//File choise started.
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/PC_NAMe/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
                res._write('Success');

                res.end();
            });
            
        });
    } else {

        fs.readFile('test.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();


        });
}
        //File choise finished.
    }).listen(8080);