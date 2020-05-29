
module.exports = function(app){
    var fs = require('fs');
    var bodyParser = require('body-parser');
//    var JSZip = require('jszip');
    var crawler = require('../crawler/crawler.js');
    var downloader = require('../imageDownloader/imgDownloader.js');

    //사용자를 구분하기 위한 id값 부여
    var userId = 0;

    // post 요청을 처리하기 위한 bodyParser
    // 기본 request는 body를 제공하지만 내부 기능이 포함되지 않아
    // 미들웨어인 bodyParser나 multer를 사용해야 한다.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    //main page
    app.get('/',function(req,res){

        res.render('main',{content:[" "],useAble:true});
    });

    // 사용자 target url 받기
    // target url에서 크롤링 진행
    app.post('/target',function(req,res){
        
        var url = req.body.url
        console.log("input url : "+url);

        // 내부에서 url 유효성 검사
        // 사용 가능 시 컨텐트 반환
        // 사용 불가능 할 시 not Url 반환
        crawler.getImage(url,function(content){
            
            var useAble = true;

            if(content[0] == "not Url"){
                useAble = false;
            }

            for (let i = 0; i < content.length && useAble; i++) {
                const element = content[i];
                console.log("num "+i+" : "+element);
                
            }

            res.render('main',{content : content, useAble:useAble});
            console.log("rendering done");
            
        });

    
        console.log("post done");

        
    });


    // 추출한 img src중 사용자가 선택한 이미지 다운로드
    app.post('/download',function(req,res) {
        var item = new Array();
        var content = new Array();
        
        //user 카운트 
        userId++;

        // 체크된 이미지 값 읽기
        item =  req.body.item;
   
        //체크된 모든 이미지값을 다운로드한다.
        var fileCount = 0;
        downloader.downloadImgs(item,userId,function(fileList) {
            console.log("file List : " + fileList);
            
        });
            
        

        res.redirect('/');
        
    });
}