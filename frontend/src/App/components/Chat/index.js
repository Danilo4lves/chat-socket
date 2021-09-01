import React from 'react';
import { useForm } from 'react-hook-form';

import ChatPresentational from './presentational';

import { AppContext } from '../../contexts';

import { MessageService } from '../../../services';

function Chat() {
  const { socket } = React.useContext(AppContext);

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
  }, [socket]);

  function onSubmit(values) {
    const { message } = values;

    socket.emit('message', message);
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
