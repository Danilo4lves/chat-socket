import styled from 'styled-components';

import { chatBackground } from '../../../assets';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding-bottom: 3rem;
`;

export const Messages = styled.ul`
  flex: 1;
  padding: 0;

  list-style-type: none;
  background-image: url(${chatBackground});
  background-repeat: repeat;
  background-position: center;

  > li {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 8px;

    > span {
      padding: 8px 12px;

      color: black;

      background-color: #d3d3d3;
      border-radius: 8px;
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
