import React from 'react';

import {
  Container,
  Title,
  Form,
  NameInput,
  SubmitButton
} from './styles';

function NameFormPresentational(props) {
  const {
    register,
    handleSubmit,
    isFormValid,

    changeName,
  } = props;

  return (
    <Container>
      <Form onSubmit={handleSubmit(changeName)}>
        <Title>Se identifique</Title>

        <NameInput placeholder="Digite seu nome" {...register('name', { required: true })} />
        <SubmitButton type="submit" disabled={!isFormValid}>Confirmar</SubmitButton>
      </Form>
    </Container>
  );
}

export default NameFormPresentational;
