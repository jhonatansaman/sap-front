import React, {useEffect, useState} from 'react';
import MainCard from '../../../assets/components/card';
import Header from '../../../assets/components/header';
import Input from '../../../assets/components/input';
import Sidebar from '../../../assets/components/sidebar';
import {StateRoles} from '../../../assets/components/sidebar/index.type';
import {userService} from '../../../services/user';
import {Container, Content, Line, InputBox, MainContent, Label} from './styles';

const Cadaster: React.FC = () => {
  const [roles] = useState<StateRoles>({data: userService.getRoles()});

  return (
    <Container>
      <Sidebar name="Teste" data={roles.data} routes={[]} />
      <Content>
        <Header />
        <MainContent>
          <MainCard>
            <Line>
              <InputBox>
                <Label>Nome</Label>
                <Input type="text" />
              </InputBox>
              <InputBox>
                <Label>Siape</Label>
                <Input type="text" />
              </InputBox>
            </Line>
          </MainCard>
        </MainContent>
      </Content>
    </Container>
  );
};

export default Cadaster;
