const fs = require('fs');

//1.fs.stat 检测是文件还是目录
/*fs.stat("../demo04",(error,stats) => {
   if (error){
       console.log(error);
   }else {
       console.log(stats);
       console.log(`文件:${stats.isFile()}`);
       console.log(`目录:${stats.isDirectory()}`);
   }
});*/

//2.fs.mkdir 创建目录
/*fs.mkdir('../logs',(error) => {
   if (error){
       console.log(error);
   }
   else {
       console.log('成功创建目录 logs');
   }
});*/

//3.fs.writeFile 创建写入文件
/*fs.writeFile('../logs/hello.log','hello log~\n',(err) => {
   if (err) {
       console.log(err);
   }  else {
       console.log('成功写入文件');
   }
});*/

//4.追加文件
/*fs.appendFile('../logs/hello.log','hello~ \n',(error) => {
   if (error) {
       console.log(error);
   }  else {
       console.log('成功写入文件');
   }
});*/

//5.fs.readFile 读取文件
/*fs.readFile('../logs/hello.log','utf8',(error,data) => {
   if (error){
       console.log(error);
   }  else {
       console.log(data);
   }
});*/

//6.fs.readdir 读取目录
/*fs.readdir('../logs',(error,files) => {
   if (error){
       console.log(error);
   }  else {
       console.log(files)
   }
});*/

//7.fs.rename 重命名
/*fs.rename('../logs/rename.js','../logs/rename2.js',(error) => {
   if (error) {
       console.log(error);
   }  else {
       console.log('重命名成功');
   }
});*/

//8.fs.rmdir 删除目录
/*fs.rmdir('../logs2',(error) => {
   if (error){
       console.log(error);
   }else {
       console.log('成功删除了目录:logs');
   }
});*/

//9. fs.unlink 删除文件
/*const  file = 'a.js';
fs.unlink(`../logs2/${file}`,(error)=>{
   if(error) {
       console.log(error);
   }else {
       console.log(`成功删除了文件：${file}`)
   }
});*/

//10. fs.createReadStream() 从文件流中读取数据
/*let fireReadStream = fs.createReadStream('./test.json');
let count = 0;
let str = '';

fireReadStream.on('data',(chunk) => {
   console.log(`${++count}接收到:${chunk.length}`);
   str = str + chunk;
});

fireReadStream.on('end',() => {
   console.log('----结束----');
   console.log(count);
   console.log(str);
});

fireReadStream.on('error',(error) => {
   console.log(error);
});*/


//11.fs.createWriteStream() //写入文件
/*let data = '测试数据';

let writeStream = fs.createWriteStream('./output.txt');

writeStream.write(data,'UTF8');
writeStream.end();
writeStream.on('finish',() => {
   console.log('写入完成,');
});
writeStream.on('close',() => {
    console.log('写入完成close');
});
writeStream.on('error',(error) => {
   console.log(error.stack);
});
console.log('流写入完毕');*/

//12.管道流
let  readerStream  =  fs .createReadStream( 'input.txt');
// 创建一个可写流
let  writerStream  =  fs .createWriteStream('output.txt');
// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream .pipe( writerStream );
console .log('程序执行完毕');
