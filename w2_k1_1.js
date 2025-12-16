const express = require('express');
const app = express();
const PORT = 3000;
// Callback function to handle response
function sendGreeting(req, res) {
   const name = req.query.name || 'Guest';
   res.send(`Hello, ${name}!`);
}
app.get('/', (req, res) => {
   res.send('Hello from Express!');
});
// Route that uses the callback function
app.get('/greet', sendGreeting);

//ส่วนที่แก้ไข
app.get('/age',(req,res)=>{
    const age = req.query.age || 'i dont know';
    res.send(`${age} , years old`);
});

app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`);
});
