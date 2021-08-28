import { Container, Messages, Form } from './styles';

function App() {
  return (
    <Container>
      <Messages>empty</Messages>
      <Form action="">
        <input autocomplete="off" />
        <button>Enviar</button>
      </Form>
    </Container>
  );
}

export default App;
