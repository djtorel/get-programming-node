const http = require('http');
const httpStatus = require('http-status');
const fs = require('fs');
const router = require('./router');

const plainTextContentType = {
  'Content-Type': 'text/plain',
};

const htmlContentType = {
  'Content-Type': 'text/html',
};

const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (error, data) => {
    if (error) {
      console.error('Error reading file...');
    }
    res.end(data);
  });
};

router.get('/', (req, res) => {
  res.writeHead(httpStatus.OK, plainTextContentType);
  res.end('INDEX');
});

router.get('/index.html', (req, res) => {
  res.writeHead(httpStatus.OK, htmlContentType);
  customReadFile('./views/index.html', res);
});

router.get('/about', (req, res) => {
  res.writeHead(httpStatus.OK, htmlContentType);
  customReadFile('./views/about.html', res);
});

router.post('/', (req, res) => {
  res.writeHead(httpStatus.OK, plainTextContentType);
  res.end('POSTED');
});

const port = 3000;
const app = http.createServer(router.handle);
app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
