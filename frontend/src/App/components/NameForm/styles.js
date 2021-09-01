import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 18px;

  border-width: 1px;
  border-color: #868b8e;
  border-style: solid;
  border-radius: 8px;
  background-color: #eeede7;
`;

export const Title = styled.h1`
  width: 260px;
  margin-top: 0;
  margin-bottom: 36px;

  text-align: center;
  color: #746c70;
  font-size: 24px;
  font-weight: 700;
`;

export const NameInput = styled.input`
  height: 36px;
  padding-left: 8px;

  color: #746c70;
  font-size: 12px;
  line-height: 8px;

  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  height: 30px;
  margin-top: 16px;

  color: #868b8e;
  font-size: 14px;
  font-weight: 600;
  line-height: 10px;

  border-radius: 8px;
  background-color: #b9b7bd;
  cursor: pointer;

  transition-property: background-color color;
  transition-duration: 0.3s;

  &:hover {
    color: ${darken(0.15, '#868b8e')};

    background-color: ${darken(0.15, '#b9b7bd')};
  }
`;
