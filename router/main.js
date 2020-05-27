
module.exports = function(app){
    var bodyParser = require('body-parser');
    
    var crawler = require('../crawler/crawler.js');
        
    // post 요청을 처리하기 위한 bodyParser
    // 기본 request는 body를 제공하지만 내부 기능이 포함되지 않아
    // 미들웨어인 bodyParser나 multer를 사용해야 한다.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/',function(req,res){
        res.render('main',{name:'hello'});
    });

    //사용자 target url 받기
    app.post('/target',function(req,res){
        
        var url = req.body.url
        console.log(url);

        crawler.getImage(url,function(content){
            
            for (let i = 0; i < content.length; i++) {
                const element = content[i];
                console.log(element);
                
            }

            res.render('main');
            console.log("rendering done");
            
        });

    
        console.log("post done");
        
        
        
    });
}