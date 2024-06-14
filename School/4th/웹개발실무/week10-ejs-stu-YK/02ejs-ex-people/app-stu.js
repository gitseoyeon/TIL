// ./02ejs-ex/app.js
const path = require('path');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);



app.get(                    => {
               ('index', {
        "People":
            [
                {
                    "name": "Gildong",
                    "age": "15"
                },
                {
                    "name": "Oh",
                    "age": "27"
                },
                {
                    "name": "Hye",
                    "age": "25"
                }
            ]
        , title: "Express"
    });
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중')
});
