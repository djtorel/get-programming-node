const express = require('express');
const layouts = require('express-ejs-layouts');

const homeController = require('./controllers/homeController');

const app = express();
app.use(layouts);
app.set('view engine', 'ejs');

app.get('/name/:myName', homeController.respondWithName);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server started on http://localhost:${port}`));
