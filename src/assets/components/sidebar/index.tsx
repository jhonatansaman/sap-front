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
  TitleBox,
  Title,
  Content,
  UserBox,
  UserName,
  UserNameBox,
  Email,
} from './styles';

const renderMenus = (routes: Array<MenuSidebar>) =>
  routes?.map((menu, index) => (
    <ContainerMenu key={index.toString()}>
      <IconBox>
        <Image src={menu.icon} />
      </IconBox>
      <Menu>{menu.label}</Menu>
    </ContainerMenu>
  ));

const renderRoles = (roles: Array<Roles> | undefined) =>
  roles?.map(role => <Link href="#">{role.nome}</Link>);

const Sidebar: React.FC<SidebarProps> = ({user, data, routes}) => (
  <Container>
    <TitleBox>
      <Title>UFSC - Cadastros</Title>
    </TitleBox>

    <Content>
      <UserBox>
        <ImageBox>
          <Image src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" />
        </ImageBox>
        <UserNameBox>
          <UserName>{capitalize(user.nome)}</UserName>
          <Email>{user.email}</Email>
        </UserNameBox>
      </UserBox>
      {renderMenus(routes)}
    </Content>
  </Container>
);
export default Sidebar;
