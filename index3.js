const express = require('express');
const app = express();
const axios = require('axios'); 

app.use(express.json());
app.post('/receive', (req, res) => {
const { message, from } = req.body;
res.json({ status: 'Received from friend', message: message, from:from });
});

// Endpoint สำหรับส่งข้อความไปยัง Friend server
app.post('/send', async (req, res) => {
const message = req.body;

try {
const response = await axios.post('http://192.168.14.82:3000/receive', {
message,
from: 'Friend server'
});
res.json({ status: 'Friend sent', responseFromFriend: response.data });
} catch (err) {
res.status(500).json({ error: 'ส่งไม่สำเร็จ', details: err.message });
}
});


app.listen(3000, () => {
console.log('Server is running on port 3000');

});