const { log } = require('console');
const express = require('express');

const port = 9000;

const app = express();

app.get('/', (req , res) => {
  res.write(`<h1>Hello Mahadev</h1>`);
  res.end();
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }

    console.log(`port is start on :- http://localhost:${port}`);
    
})