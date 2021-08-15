import React from 'react';
import {capitalize} from '../../../utils/capitalize';
import Arrow from '../../UIkit/images/arrow-drop-down.png';
import Avatar from '../../UIkit/images/avatar.png';
import {MenuSidebar, Roles, SidebarProps} from './index.type';
import {
  Bottom,
  Button,
  Container,
  ContainerMenu,
  Dropdown,
  DropdownContent,
  Header,
  IconBox,
  Image,
  ImageBox,
  Left,
  Link,
  Menu,
  Middle,
  Right,
  Top,
  User,
} from './styles';

const renderMenus = (routes: Array<MenuSidebar>) =>
  routes?.map((menu, index) => (
    <ContainerMenu key={index.toString()}>
      <Left>
        <IconBox>
          <Image src={menu.icon} />
        </IconBox>
      </Left>
      <Right>
        <Menu>{menu.label}</Menu>
      </Right>
    </ContainerMenu>
  ));

const renderRoles = (roles: Array<Roles> | undefined) =>
  roles?.map(role => <Link href="#">{role.nome}</Link>);

const Sidebar: React.FC<SidebarProps> = ({name, data, routes}) => (
  <Container>
    <Header>
      <Top>
        <ImageBox>
          <Image src={Avatar} />
        </ImageBox>
      </Top>
      <Middle>
        <User>{capitalize(name)}</User>
      </Middle>
      <Bottom>
        <Dropdown>
          <Button>{data?.papeis?.[0]?.nome}</Button>
          <DropdownContent>{renderRoles(data?.papeis)}</DropdownContent>
        </Dropdown>
        <img src={Arrow} />
      </Bottom>
    </Header>
    {renderMenus(routes)}
  </Container>
);
export default Sidebar;
