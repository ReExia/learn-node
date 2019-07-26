let http = require("http");

let port = 8888;
http.createServer((req,res) => {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    //设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    // 发送响应数据 "Hello World"
    res.end("哈哈哈哈，我买了一个 switch" + (1+2+3) + "s");
}).listen(port);

console.log("server start at " + port);
