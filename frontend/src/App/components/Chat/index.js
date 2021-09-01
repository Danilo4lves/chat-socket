import React from 'react';
import io from 'socket.io-client';
import { useForm } from 'react-hook-form';

import ChatPresentational from './presentational';

import { MessageService } from '../../../services';

const socket = io.connect('/');

function Chat(props) {
  const { userName } = props;

  const { register, handleSubmit } = useForm();

  const [messages, setMessages] = React.useState([])

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchMessages() {
      setIsLoading(true);

      const {
        data: {
          messages = []
        }
      } = await MessageService.getAll();

      setMessages(messages);

      setIsLoading(false);
    }

    fetchMessages();
  }, []);

  React.useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevState) => [...prevState, message]);
    });
  }, []);

  function onSubmit(values) {
    const { message } = values;

    socket.emit('message', { user: userName, message });
  }

  return React.createElement(ChatPresentational, {
    register,
    handleSubmit,

    messages,
    isLoading,

    onSubmit,
  });
}

export default Chat;
