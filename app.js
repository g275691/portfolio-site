const http = require("http");
const fs = require("fs");
  
http.createServer(function(request, response){
    let filePath = request.url.substr(1);
    if (request.url === "/") filePath = "index.html";

    fs.access(filePath, fs.constants.R_OK, err => {
        if(err){
            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else{
            fs.createReadStream(filePath).pipe(response);
        }
      });
}).listen(3000, function(){
    console.log("Server started at 3000");
});