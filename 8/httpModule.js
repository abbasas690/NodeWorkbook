import http from "http";

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;
  //   res.statusMessage = "not found";
  //   res.write("<h1>hello form the demo server</h1>");
  //   res.end("ehld");
  if (req.url === "/") {
    res.end("<h1>HOmE</h1>");
  } else if (req.url == "/about") {
    res.end("<h2>about</h2>");
  } else {
    res.end("<h1>404 page not found :( </h1>");
  }
});

server.listen(8000, () => console.log("server listening on 8000"));
