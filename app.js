const express = require('express');
const app = express();

app.get('/welcome', (req,res) => {
    res.end('Hey welcome to my API first application'); 
});

app.get('/welcome/:x', (req, res)=>{
    let x = req.params.name;
    res.send(  `Hey ${x}, thanks for calling a parameterized route in my API first application ` );
});

app.listen(4000);
console.log('Server is running on port 4000');
