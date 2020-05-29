
exports.getZip = function(fileList,callback) {
    var fs = require('fs');
    var zip = new require('node-zip')();

    var dir = fileList[0].split('/');

    // ./contents/userId/
    var path = dir[0]+"/"+dir[1]+"/"+dir[2]+"/";


    fileList.forEach(fileName => {
        
        fileName = fileName.split('/');
        fileName = fileName[3];
        zip.file(fileName,fs.readFileSync(path+fileName));
    });

    var data = zip.generate({base64:false, compression:'DEFLATE'});

    fs.writeFileSync(path+'img.zip',data,'binary');
    callback(path+'img.zip');
}
