import Server from './server/server';
import router from './router/router';
import http = require('http');
import socketIO = require('socket.io');
import express = require('express');
import path = require('path');

const expressServer = Server.init(8080);
const server = http.createServer(expressServer.app);
const io = socketIO.listen(server);

expressServer.app.use(router);

io.on('connection', (socket: SocketIO.Socket) => {
	console.log('new connection');
});

server.listen(8080);
