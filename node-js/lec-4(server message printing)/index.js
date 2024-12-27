const http = require("http");
const port = 8050;
const server = http.createServer((req, res) => {
  res.write("<h1>Hello Krishna</h1>");
  res.write("<h1>Hello Mahadev</h1>");
  res.end();
});

server.listen(port, (err) => {
  if (!err) {
    console.log(`Server Is Start On Port :- ${port}`);
  }
});
