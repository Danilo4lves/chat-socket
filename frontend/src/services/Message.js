import { api } from '../config/api';

class MessageService {
  async getAll() {
    const response = await api.get('/messages');

    return response;
  }
}

export default new MessageService();
