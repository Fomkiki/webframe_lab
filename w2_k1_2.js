const express = require('express');
const app = express();
const PORT = 3000;

function passCallback() {
    return 'You passed the exam.' ;
}

function failCallback(req, res) {
    return 'Sorry! Please try again.' ;
}

app.get('/', (req, res) => {
   res.send('Hello from Express!');
});

/*app.get('/checkScore', (req , res) =>{
    const score = parseInt(req.query.score) || 0 ;
    if(score >= 60){
        res.send('You passed the exam.') ;
    }
    else if(score <= 60){
        res.send('Sorry! Please try again.') ;
    }
});*/

function checkScore(req , res){
    const score = parseInt(req.query.score) || 0 ;
    if(score >= 60){
        const text = passCallback();
        res.send(`${text}`);

    }
    else if(score <= 60){
        const text = failCallback();
        res.send(`${text}`);
    }
} 

app.get('/checkScore', checkScore);


app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`);
});
