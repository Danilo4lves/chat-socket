import React from 'react';

import {
  Container,
  Title,
  Form,
  NameInput,
  SubmitButton
} from './styles';

function NameFormPresentational() {
  return (
    <Container>
      <Form>
        <Title>Se identifique</Title>

        <NameInput placeholder="Digite seu nome" />
        <SubmitButton>Confirmar</SubmitButton>
      </Form>
    </Container>
  );
}

export default NameFormPresentational;
