import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  max-height: 500px;
  height: 100%;
  padding: 30px;
  border: 1px solid rgb(189 128 128);
  background: #fff4;
  border-radius: 5px;
  justify-content: center;
`;
export const StyledField = styled(Field)`
  background: transparent;
  border: 1px solid #3a3434;
  border-radius: 5px;
  width: 100%;
  height: 60px;
  font-size: 16px;
  padding-left: 20px;
  margin-top: 5px;
`;

export const Label = styled.label`
  color: #fff4;
  margin-bottom: 5px;
`;
export const ContainerBtn = styled.div`
  text-align: center;
`;
