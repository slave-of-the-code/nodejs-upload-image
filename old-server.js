const http = require("http");

http
  .createServer((req, res) => {
    // res.write("hello http!!");

    res.setHeader("Content-type", "application/json");
    let outputJson = {
      name: "gustavo",
      age: 40,
      isMale: true,
      url: req.url,
      httpVersion: req.httpVersion,
    };
    res.write(JSON.stringify(outputJson, null, 4));
    res.end();
  })
  .listen(8080);

// http://localhost:8080/
console.log("Server running");
