exports.downloadImgs = function(items,userId,callback){
  const fs = require('fs');
  const request = require('request');


  var fileCount = 0;
  var fileList = new Array("A", "B");
  var dir = "./contents/"+userId;

  //디렉터리가 없다면 생성
  if(!fs.existsSync(dir))
  fs.mkdirSync(dir)





  items.forEach(element => {

  
    var filename = dir+"/img"+fileCount+".jpg";
    fileCount++;

    request.head(element,function(err,res,body){
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
      
      
      request(element).pipe(fs.createWriteStream(filename)).on('close',function() {
        console.log("download "+filename+" done"); 
        fileList.push(filename);

      });
      
    
    });

    
    

  });
  console.log("file download all done");
  
  callback(fileList);


  
 };
