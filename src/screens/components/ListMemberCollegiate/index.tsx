import React from 'react';
import Header from '../../../assets/components/header';
import {Container} from './styles';
const ListMemberCollegiate: React.FC = () => (
  <Container>
    <Header onChange={param => console.log(param)} />
  </Container>
);

export default ListMemberCollegiate;
