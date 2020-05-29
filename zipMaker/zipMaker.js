
exports.getZip = function(fileList,callback) {
    var fs = require('fs');
    var zip = new require('node-zip')();

    fileList.forEach(fileName => {
        var dir = fileName;
        fileName = fileName.split('/');
        fileName = fileName[3];
        zip.file(fileName,fs.readFileSync(dir));
    });

    var data = zip.generate({base64:false, compression:'DEFLATE'});

    fs.writeFileSync('img.zip',data,'binary');
}
