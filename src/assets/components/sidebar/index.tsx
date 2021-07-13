import React from 'react';
import Avatar from '../../UIkit/images/avatar.png';
import {APIResponseRoles, Roles, SidebarProps, StateRoles} from './index.type';
import {
  Button,
  Container,
  Dropdown,
  DropdownContent,
  Header,
  Image,
  ImageBox,
  Link,
  Top,
  User,
} from './styles';

const renderRoles = (roles: Array<Roles> | undefined) =>
  roles?.map(role => <Link href="#">{role.nome}</Link>);

const Sidebar: React.FC<SidebarProps> = ({data}) => (
  <Container>
    <Header>
      <Top>
        <ImageBox>
          <Image src={Avatar} />
        </ImageBox>
      </Top>
      <User>Jhonatan Saman</User>
      <Dropdown>
        <Button>
          {data?.papeis?.[0]?.nome}
          <i className="fa fa-caret-down"></i>
        </Button>
        <DropdownContent>{renderRoles(data?.papeis)}</DropdownContent>
      </Dropdown>
    </Header>
  </Container>
);
export default Sidebar;
