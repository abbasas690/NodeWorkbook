import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "ok", { "content-type": "tex/html" });
    fs.readFile("./9/home.html", (err, data) => {
      if (err) throw err;
      res.end(data.toString());
    });
  } else if (req.url === "about") {
    res.writeHead(200, "ok", { "content-type": "tex/html" });
    fs.readFile("./9/home.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  }
});

server.listen(8000, () => console.log("server on 8000"));
