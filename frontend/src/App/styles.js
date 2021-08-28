import styled from 'styled-components';

export const Container = styled.main`
    margin: 0;
    padding-bottom: 3rem;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

export const Messages = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;

  > li {
    padding: 0.5rem 1rem;

    color: black;

    &:nth-child(odd) {
      background-color: #efefef;
    }
  }
`;

export const Form = styled.form`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  height: 3rem;
  padding: 0.25rem;
  box-sizing: border-box;

  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);

  > input {
    flex-grow: 1;
    margin: 0.25rem;
    padding: 0 1rem;

    border: none;
    border-radius: 2rem;

    &:focus {
      outline: none;
    }
  }

  > button {
    padding: 0 1rem;
    margin: 0.25rem;

    color: white;

    background-color: #333;
    border-radius: 3px;
    outline: none;
  }
`;
