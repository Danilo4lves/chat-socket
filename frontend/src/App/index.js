import React from 'react';
import { useForm } from 'react-hook-form';
import io from 'socket.io-client';

import { Container, Messages, Form } from './styles';

const socket = io.connect('/');

function App() {
  const { register, handleSubmit } = useForm();

  const [messages, setMessages] = React.useState([])

  React.useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevState) => [...prevState, message]);
    });
  }, []);

  function onSubmit(values) {
    const { message } = values;

    socket.emit('message', message);
  }

  return (
    <Container>
      <Messages>
        {/* TODO: Remove usage of index */}
        {messages.map((message, index) =>
          <li key={`${message}-${index}`}>{message}</li>
        )}
      </Messages>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('message')} />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

export default App;
