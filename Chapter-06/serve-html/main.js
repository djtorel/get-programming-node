const http = require('http');
const httpStatus = require('http-status');
const fs = require('fs');

const getViewUrl = url => `views${url}.html`;

const app = http.createServer((req, res) => {
  let viewUrl = getViewUrl(req.url);
  fs.readFile(viewUrl, (error, data) => {
    if (error) {
      res.writeHead(httpStatus.NOT_FOUND);
      res.write('<h1>FILE NOT FOUND</h1>');
      console.log(error);
    } else {
      res.writeHead(httpStatus.OK, {
        'Content-Type': 'text/html',
      });
      res.write(data);
    }
    res.end();
  });
});

const port = 3000;
app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
