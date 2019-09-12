let http = require("http");
let url = require("url");
let port = 9000;
http.createServer((req,res) => {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    //设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});

    //url
    //let urlConsole = url.parse(req.url);
    //console.log(url.parse("https://www.baidu.com/"));
    //console.log(url.format("https://www.baidu.com/"));
    console.log(url.resolve("https://www.baidu.com/","/one"));
    // 发送响应数据 "Hello World"
    res.end("哈哈哈哈，我买了一个 switch aaaa");

}).listen(port);

console.log("server start at " + port);
