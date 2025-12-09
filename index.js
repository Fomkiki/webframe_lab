const http = require('http');

/*const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Welcome to Node.js First Lab!\n');
});

server.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000');
});
*/

const data = [{id:1,name:'a'},{id:2,name:'b'}] ;
http.createServer((req, res) => {
if (req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("ระบบพร้อมทำงาน");
}
else if(req.url === '/nothingfound'){
    res.writeHead(400,{'Content-Type':'text/plain'});
    res.write("ไม่พบpageนี้");
}
else if(req.url === '/accessserver'){
    res.writeHead(500,{'Content-Type':'text/plain'});
    res.write("Server ผิดพลาด");
}


res.end();
}).listen(3000, () => {
console.log('เซิร์ฟเวอร์ทำงานที่ http://localhost:3000');
});


