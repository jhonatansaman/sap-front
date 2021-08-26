import React from 'react';
import {Container, Text} from './styles';

import {ButtonProps} from './index.type';

const Button: React.FC<ButtonProps> = ({title, action}) => (
  <Container onClick={action}>
    <Text>{title}</Text>
  </Container>
);

export default Button;
