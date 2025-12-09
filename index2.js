const express = require('express');
const app = express();
const port = 3000;
// ตั้งค่าให้ Express เสิร์ฟไฟล์ static จากโฟลเดอร์ public
app.use(express.static('public'));
// Define a simple route
app.get('/', (req, res) => {
res.set('Content-Type', 'text/html'); // Set the header manually
res.send('<link rel="stylesheet" href="/css/style.css"> <h1>Hello, world!</h1><img src="/pic/tower.jpg" class="pic_1"  width="500" height="600">'); // Send HTML content
});


app.listen(port, () => {
    console.log(`Server เปิดที่ http://localhost:${port}`);
});

/*const express = require('express');
const app = express();
app.use(express.json()); //ต้องมีสำหรับตอบกลับแบบ JSON
app.post('/message', (req, res) => {
try{
const data = req.body; // Now contains parsed JSON
res.status(200).json({ message: data });
} catch (err) {
res.status(500).json({ error: 'ส่งไม่สำเร็จ', details: err.message });
}

});
app.listen(3000, () => {
console.log('Server is running on port 3000');
});*/