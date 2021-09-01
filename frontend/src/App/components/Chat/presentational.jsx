import React from 'react';

import { Container, Messages, Form } from './styles';

function Chat(props) {
  const {
    register,
    handleSubmit,

    messages,
    isLoading,

    onSubmit,
  } = props;

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

export default Chat;

