
exports.getImage = function(url,callback){

    const req = require('request');
    const cheerio = require('cheerio');
    const validUrl = require('valid-url');
    
    if (validUrl.isUri(url)){
        console.log('Looks like an URI');


        let content = new Array();
        req({url:url,encoding:null},(error,response,body) => {
            if(error) throw error;
            
            let $ = cheerio.load(body);
            
            try{
                
                

                let img;
                $('div').find('img').each(function (index,elem){

                    img = $(this).attr('src');
                    
                    // 이미지 속성값에 메인 url이 없는 경우가 있다. ex) /assets/images/logo.png
                    // 이런 경우 메인 url을 더해서 더함
                    if(!validUrl.isUri(img)){
                        img = url + img;
                    }
                    
                    content.push(img);
                    //console.log(img);
                    
                
                })
                console.log("img src get done");
                callback(content);

            }catch(error){
                console.error(error);
                console.log("error!");
                
            }
        });

    } else {
        callback(new Array("not Url"));
    }
    console.log("crawler done");
    
    
    

};
    



