const http = require ('http');
const fs = require('fs');

http.createServer((request,response)=>{
    console.log(request.url);
    let file = `./matriculas${request.url}.json`;

    if(request.url == '/'){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("Pagina principal");
        response.end();
    } else{
        fs.readFile(file,(error,data)=>{
            if(error){
                response.writeHead(404,{"Content-type":"text/plain"});
                response.write("Not found");
                response.end();
            }else{
                response.writeHead(200,{"Content-type":"application/json"});
                response.write(data);
                response.end();
            }
        });
    }
}).listen(8888);