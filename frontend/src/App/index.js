import React from 'react';
import { useForm } from 'react-hook-form';
import io from 'socket.io-client';

import { MessageService } from '../services';

import { Container, Messages, Form } from './styles';

const socket = io.connect('/');

function App() {
  const { register, handleSubmit } = useForm();

  const [messages, setMessages] = React.useState([])

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchMessages() {
      setIsLoading(true);

      const response = await MessageService.getAll();

      setMessages(response.data.messages);

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

    socket.emit('message', message);
  }

  function renderMessages() {
    if (isLoading) {
      return <span>Carregando...</span>;
    }

    return (
      <Messages>
        {/* TODO: Remove usage of index */}
        {messages.map((message, index) =>
          <li key={`${message}-${index}`}>{message}</li>
        )}
      </Messages>
    );
  }

  return (
    <Container>
      {renderMessages()}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('message')} />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

export default App;
