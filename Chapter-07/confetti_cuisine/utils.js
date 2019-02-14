const fs = require('fs');
const httpStatus = require('http-status');
const contentTypes = require('./content-types');

module.exports = {
  getFile: (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      if (error) {
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
        res.end('There was an error serving content!');
      }
      res.end(data);
    });
  },
};
