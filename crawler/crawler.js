
exports.getImage = function(url){

    const req = require('request');
    const cheerio = require('cheerio');

    var str = 'hi';

    req({url:url,encoding:null},(error,response,body) => {
        if(error) throw error;
        str = 'a';
        let $ = cheerio.load(body);
        
        try{
            str = 'b';
            

            let img;
            $('div').find('img').each(function (index,elem){

                img = $(this).attr('src');

                console.log(img);
                str = 'c';
            })
            console.log("img src get done");
            

        }catch(error){
            console.error(error);
            
        }
    });

    console.log("crawler done");
    
    
    return str;

};
    



