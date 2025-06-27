const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Merhaba, Argo CD ile Node.js çalışıyor!\n");
  res.end("Merhaba22222, Argo CD ile Node.js çalışıyor!\n");
});

server.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
