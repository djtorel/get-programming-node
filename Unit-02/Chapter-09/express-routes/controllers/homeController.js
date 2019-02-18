const bodyParser = require('body-parser');

exports.sendReqParam = (req, res) => {
  const veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.logPostResults = (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  console.log(req.query);
  res.send('POST Successful!');
};

exports.parseUrlEndocded = bodyParser.urlencoded({
  extended: false,
});

exports.parseJson = bodyParser.json();

exports.logRequestPaths = (req, res, next) => {
  console.log(`Request made to: ${req.url}`);

  next();
};

exports.userSignUpProcesor = (req, res) => {
  console.log(
    `Request to sign up user with data: \n ${JSON.stringify(req.body, null, 2)}`
  );
  res.send(`You are signed up, ${req.body.first_name}\n`);
};
