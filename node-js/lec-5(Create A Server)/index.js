// Create A Server

console.log(__filename);
console.log(__dirname);
console.log(`har har mahadev`);

const http = require('http');
const port = 8000;
const fs = require('fs');
const { log } = require('console');
const server = http.createServer((req , res) => {

    let fileName = "";
    switch (req.url) {
        case "/":
            fileName = "./home.html";
        break;
        case "/ab":
            fileName = "./about.html";
        break;
        case "/con":
            fileName = "./contact.html";
        break;
        default:
            fileName = ".404.html";

    }

    fs.readFile(fileName , (err , pageName) => {
        if (err) {
            console.log(`Page Is Not Found`);
            return false;
        }
        res.end(pageName)
    })
})
server.listen(port,(err)=> {
    if (!err){
        console.log(`Server is Start On Port :- ${port}`);
        
    }
})