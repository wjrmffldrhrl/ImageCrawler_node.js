exports.downloadImg = function(uri, filename, callback){
  const fs = require('fs');
  const request = require('request');

  request.head(uri,function(err,res,body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
  
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  
  });
 };


// download('https://www.naver.com', './test.jpg', function(){
//   console.log('done');
// });