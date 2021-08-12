import React from 'react';
import {InputProps} from './index.type';
import {Container, InputField} from './styles';

const Input: React.FC<InputProps> = ({type}) => (
  <Container>
    <InputField type={type} />
  </Container>
);

export default Input;
