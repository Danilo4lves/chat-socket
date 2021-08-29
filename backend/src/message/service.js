const fs = require("fs");

class MessageService {
  read() {
    const rawData = fs.readFileSync("./data/database.json");

    return JSON.parse(rawData);
  }

  write(data) {
    const db = this.read();

    console.log('db', db);

    const updatedDb = { messages: [...db.messages, data] };

    const stringifiedUpdatedDb = JSON.stringify(updatedDb, null, 2);

    fs.writeFileSync("./data/database.json", stringifiedUpdatedDb);
  }
}

module.exports = new MessageService();
