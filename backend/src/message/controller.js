const Service = require('./service');

class MessageController {
  index(request, response) {
    const data = Service.read();

    return response.send(data);
  }
}

module.exports = new MessageController();
