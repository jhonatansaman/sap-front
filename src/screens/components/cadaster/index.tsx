import React, {useEffect, useState} from 'react';
import Input from '../../../assets/components/input';
import Sidebar from '../../../assets/components/sidebar';
import {StateRoles} from '../../../assets/components/sidebar/index.type';
import {userService} from '../../../services/user';
import {Container, Content, Line, InputBox, Label} from './styles';

const Cadaster: React.FC = () => {
  const [roles] = useState<StateRoles>({data: userService.getRoles()});

  return (
    <Container>
      <Sidebar data={roles.data} />
      <Content>
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
      </Content>
    </Container>
  );
};

export default Cadaster;
