
exports.getImage = function(url,callback){

    const req = require('request');
    const cheerio = require('cheerio');

    
    let content = new Array();
    req({url:url,encoding:null},(error,response,body) => {
        if(error) throw error;
        
        let $ = cheerio.load(body);
        
        try{
            
            

            let img;
            $('div').find('img').each(function (index,elem){

                img = $(this).attr('src');
                content.push(img);
                //console.log(img);
                
               
            })
            console.log("img src get done");
            callback(content);

        }catch(error){
            console.error(error);
            
        }
    });

    console.log("crawler done");
    
    
    

};
    



