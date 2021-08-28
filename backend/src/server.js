const express = require("express");
const socket = require('socket.io');
const cors = require('cors');

const app = express();

app.use(cors());

const server = app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log('Um usuário se conectou.');

  socket.on('disconnect', () => {
    console.log('Um usuário se desconectou.');
  });

  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});

module.exports = {
  socket,
  server,
};
