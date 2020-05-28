
module.exports = function(app){
    var bodyParser = require('body-parser');
    
    var crawler = require('../crawler/crawler.js');
        
    // post 요청을 처리하기 위한 bodyParser
    // 기본 request는 body를 제공하지만 내부 기능이 포함되지 않아
    // 미들웨어인 bodyParser나 multer를 사용해야 한다.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/',function(req,res){



        res.render('main',{content:[" "],useAble:true});
    });

    //사용자 target url 받기
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
}