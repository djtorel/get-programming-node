const express = require('express');

const homeController = require('./controllers/homeController');

const app = express();

app.use(homeController.parseUrlEndocded);

app.use(homeController.parseJson);

app.use(homeController.logRequestPaths);

app.post('/', homeController.logPostResults);

app.post('/sign_up', homeController.userSignUpProcesor);

app.get('/items/:vegetable', homeController.sendReqParam);

const port = 3000;
app.listen(port, console.log(`Server is running on port: ${port}`));
