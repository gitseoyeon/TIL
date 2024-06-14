// ./03middleware/app05.js
const http = require('http')
const express = require('express');
const app = express();

const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: 5000000}));
app.use(cookieParser());

app.get('/', (req, res, next) => {
    res.send('hello world')
})

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.post('/login', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
      res.send('Welcome, ' + req.body.username);
})

app.post('/api/users', jsonParser, (req, res) => {
    if (!req.body) return res.statusCode(400);
      // create user in req.body
});

app.use((req, res, next) => {
    console.log('404')
    res.status(404).send('<h1>Not Found Page</h1>')
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send(err)
})

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})
