const express = require('express');
const layouts = require('express-ejs-layouts');

const errorController = require('./controllers/errorController');
const homeController = require('./controllers/homeController');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(layouts);
app.use(errorController.logErrors);

app.get('/name/:myName', homeController.respondWithName);

app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server started on http://localhost:${port}`));
