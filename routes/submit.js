const express = require('express'); 
const router = express.Router();



router.post('/senddata', (req, res) => { 
   res.send(`Received ${JSON.stringify(req.body)}`);
});

const people = [
    { name: 'Alice', age: 28, salary: 50000 },
    { name: 'Bob', age: 34, salary: 60000 },
    { name: 'Charlie', age: 25, salary: 55000 }
];

router.get('/people',(req,res)=>{
    const nameQuery = req.query.name ;
   const person = people.find(p => p.name.toLowerCase() === nameQuery.toLowerCase());
    if (person) {
    res.json(person);
    } else {
    res.status(404).json({ error: 'Person not found.' });
    }

    
});

router.get('/getperson/:name/:age',(req,res)=>{
    const nameQuery = req.params.name ;
    const ageQuery = Number(req.params.age );
    const personName = people.find(p => p.name.toLowerCase() === nameQuery.toLowerCase());
    const personAge = people.find(p => p.age === ageQuery);

    if (personName && personAge) {
    res.json(personName);
    } else {
    res.status(404).json({ error: 'Person not found.' });
    }

    
});

router.put('/updatesalary/:name/:salary',(req,res)=>{
    const nameQuery = req.params.name ;
    const salaryQuery = Number(req.params.salary);
    const personName = people.find(p => p.name.toLowerCase() === nameQuery.toLowerCase());
 

    if (personName) {
        personName.salary = salaryQuery ;
        res.json(personName);
       
    } else {
    res.status(404).json({ error: 'Person not found.' });
    }
     
});

module.exports = router;




