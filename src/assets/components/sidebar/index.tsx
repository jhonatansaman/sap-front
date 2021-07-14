import React from 'react';
import Avatar from '../../UIkit/images/avatar.png';
import {Roles, SidebarProps} from './index.type';
import {
  Bottom,
  Button,
  Container,
  Dropdown,
  DropdownContent,
  Header,
  Image,
  ImageBox,
  Link,
  Middle,
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
      <Middle>
        <User>Jhonatan Saman</User>
      </Middle>
      <Bottom>
        <Dropdown>
          <Button>
            {data?.papeis?.[0]?.nome}
            <i className="fa fa-caret-down"></i>
          </Button>
          <DropdownContent>{renderRoles(data?.papeis)}</DropdownContent>
        </Dropdown>
      </Bottom>
    </Header>
  </Container>
);
export default Sidebar;
