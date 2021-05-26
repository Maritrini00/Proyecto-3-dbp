const http = require ('http');
const fs = require('fs');

http.createServer((request,response)=>{
    console.log(request.url);
    var file = request.url == '/' ? './matriculas.json' : `./${request.url}`;
    fs.readFile(file,(err,data)=>{
        if(err){
            response.writeHead(404,{"Content-type":"text/plain"});
            response.write("not found");
            response.end();
        }else{
            const extension = file;
            switch(extension){
                case '329675.json':
                    response.writeHead(200,{"Content-type":"application/json"});
                    break;
                case '329630.json':
                    response.writeHead(200,{"Content-type":"application/json"});
                    break;
                case '329830.json':
                    response.writeHead(200,{"Content-type":"application/json"});
                    break;
            }
            response.write(data);
            response.end();
        }
    });
    
}).listen(8888);