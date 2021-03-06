const { json } = require('express');

module.exports = (app) => {
    var fs = require('fs');
    var bodyParser = require('body-parser');
    //    var JSZip = require('jszip');
    var crawler = require('../crawler/crawler.js');
    var downloader = require('../imageDownloader/imgDownloader.js');
    var zipMaker = require('../zipMaker/zipMaker.js');
    //사용자를 구분하기 위한 id값 부여
    var userId = 0;

    // post 요청을 처리하기 위한 bodyParser
    // 기본 request는 body를 제공하지만 내부 기능이 포함되지 않아
    // 미들웨어인 bodyParser나 multer를 사용해야 한다.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    // 사용자 target url 받기
    // target url에서 크롤링 진행
    app.post('/target', (req, res) => {

        var url = req.body.url
        console.log("input url : " + url);

        // 내부에서 url 유효성 검사
        // 사용 가능 시 컨텐트 반환
        // 사용 불가능 할 시 not Url 반환
        crawler.getImage(url, (content) => {

            var useAble = true;

            if (content[0] == "not Url") {
                useAble = false;
            }

            for (let i = 0; i < content.length && useAble; i++) {
                const element = content[i];
                console.log("num " + i + " : " + element);

            }

            return res.json({ content: content })


        });


        console.log("post done");


    });


    // 추출한 img src중 사용자가 선택한 이미지 다운로드
    app.post('/download', function (req, res) {
        var items = new Array();
        var content = new Array();

        //user 카운트 
        userId++;

        // 체크된 이미지 값 읽기
        items = req.body.item;

        //체크된 모든 이미지값을 다운로드한다.
        var fileList = new Array();
        downloader.downloadImgs(items, userId, function (fileName) {
            fileList.push(fileName);

            //체크된 이미지의 수와 다운로드한 파일의 수가 같아지면 zip 파일 생성
            if (items.length == fileList.length) {
                fileList.forEach(element => {
                    console.log(element);

                });
                zipMaker.getZip(fileList, function (zipfile) {

                    res.download(zipfile);


                });
            }

        });

    });

    app.get('/api', (req, res) => res.json({ data: 'test' }));
}