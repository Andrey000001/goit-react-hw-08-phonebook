import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  max-height: 500px;
  height: 100%;
  padding: 5px 70px 70px 70px;
  border: 1px solid #ccc;
  background: #fff4;
  border-radius: 5px;
  justify-content: center;
`;
export const StyledField = styled(Field)`
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 60px;
  font-size: 16px;
  padding-left: 20px;
  border-color: rgba(0, 0, 0, 0.23);
  margin-top: 5px;
  &:active,
  &:hover {
    border-color: rgba(0, 0, 0, 0.87);
  }
`;

export const ButtonForm = styled.button`
  max-width: 160px;
  width: 100%;
  height: 45px;
  background: rgb(161 120 120);
  border-radius: 5px;
  border: transparent;
  font-weight: 500;
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  display: block;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out,
    border-color 0.25s ease-in-out, color 0.25s ease-in-out;

  &:hover {
    background-color: rgba(161, 120, 120, 0.8);
  }

  &:active {
    background-color: rgba(161, 120, 120, 0.6);
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;
export const Label = styled.label`
  color: #fff4;
  margin-bottom: 5px;
`;
