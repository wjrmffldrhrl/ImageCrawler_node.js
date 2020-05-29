
exports.getZip = function(callback) {
    var fs = require('fs');
    var zip = new require('node-zip')();

    zip.file('test1.txt',fs.readFileSync('./crawler/test1.txt'));
    zip.file('test2.txt',fs.readFileSync('./crawler/test2.txt'));

    var data = zip.generate({base64:false, compression:'DEFLATE'});

    fs.writeFileSync('test.zip',data,'binary');
}
