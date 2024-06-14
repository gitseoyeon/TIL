// ./03ejs-ex-layout/app.js
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

/* GET home page. */
app.get('/', (req, res, next) => {
    res.render('index02', { menu: "Home" });
});

app.get('/menu1', (req, res, next) => {
    res.render('index02', { menu: "Menu1" });
});

app.get('/menu2', (req, res, next) =>{
    res.render('index02', { menu: "Menu2" });
});

app.get('/menu3', (req, res, next) => {
    res.render('index02', { menu: "Menu3" });
});


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});