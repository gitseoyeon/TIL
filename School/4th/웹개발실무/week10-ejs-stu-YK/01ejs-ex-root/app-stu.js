// ./01ejs-ex/app.js
const express = require("express");
let app = express();
const ejs = require("ejs");

// ejs 템플릿
app.set("views", __dirname + '/views');
app.set("view engine", "ejs");

const router = require('./routes/controller')(app);

const server = app.listen(3000, () => {
    console.log('Server on 3000 port');
});
