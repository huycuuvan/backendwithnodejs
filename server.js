const http = require("http");
// Create a local server to receive data from
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<heade><title>Send message</title></heade>");
    res.write(
      "<body><form action='/message' method='POST' name='message'><input type='text' ><button type ='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<heade><title>My first page</title></heade>");
  res.write("<body><h1>Hello world</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(8000);
