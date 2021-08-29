const express = require("express");
const socket = require('socket.io');
const cors = require('cors');

const routes = require("./message/routes");

const MessageService = require('./message/service');

const app = express();

app.use(cors());
app.use(routes);
app.use(express.json());

const server = app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log('Um usuário se conectou.');

  socket.on('disconnect', () => {
    console.log('Um usuário se desconectou.');
  });

  socket.on('message', (data) => {
    io.emit('message', data);

    MessageService.write(data);
  });
});

module.exports = {
  socket,
  server,
};
