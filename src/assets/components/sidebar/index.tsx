import React from 'react';
import {Container, Header, Image, User, ImageBox} from './styles';
const Sidebar: React.FC = () => (
  <Container>
    <Header>
      <ImageBox>{/* <Image /> */}</ImageBox>

      <User>Jhonatan Saman</User>
    </Header>
  </Container>
);
export default Sidebar;
