// ./03app_movie_seat/app.js
const express = require('express');
const http = require('http');
const fs = require('fs');

const socketio = require('socket.io');

// 웹 서버를 생성
var app = express();
var server = http.createServer(app);

// 변수를 선언
var seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];


// 라우트를 수행
app.get('/', function (request, response, next) {
    fs.readFile('./views/index.html', function (error, data) {
        response.send(data.toString());
    });
});
app.get('/seats', function (request, response, next) {
    response.send(seats);
});

// 웹 서버를 실행
server.listen(3000, function () {
    console.log('Server Running at http://127.0.0.1:3000');
});

// 소켓 서버를 생성 및 실행
// const io = socketio.listen(server);
const io = socketio(server);

io.sockets.on('connection', function (socket) {
    socket.on('reserve', function (data) {
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserve', data);
    });
});
