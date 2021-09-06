import React, {ChangeEvent} from 'react';
import {HeaderProps} from './index.type';
import {Container, Text, SearchBox, TextSearch, Input} from './styles';
import {ReactComponent as SearchIcon} from '../../UIkit/icons/ico-search.svg';
const Header: React.FC<HeaderProps> = ({title, onChange}) => (
  <Container>
    {onChange ? (
      <SearchBox>
        <SearchIcon />
        <Input
          placeholder="Digite para pesquisar"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChange(event.target.value)
          }
        />
      </SearchBox>
    ) : (
      <Text>{title}</Text>
    )}
  </Container>
);

export default Header;
