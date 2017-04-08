/**
 * Created by hanmiao on 2017/4/8.
 */
//用node搭建Http web服务器
var http=require('http');

var server=http.createServer(function (req,res) {
    console.log('有人访问了');
    res.writeHeader(404,{
        'content-type':'text/html;charset="utg-8"'
    })
    res.write('正文');
    res.end();
}).listen(8888);

console.log('服务器开启成功');