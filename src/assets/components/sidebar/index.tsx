import React from 'react';
import {capitalize} from '../../../utils/capitalize';
import ArrowRight from '../../UIkit/icons/ico-arrow_right.svg';
import {MenuSidebar, Roles, SidebarProps, SubRoute} from './index.type';
import {
  ArrowRightBox,
  Container,
  ContainerMenu,
  Content,
  Email,
  IconBox,
  Image,
  ImageBox,
  LI,
  Link,
  Menu,
  SubMenuBox,
  Title,
  TitleBox,
  UserBox,
  UserName,
  UserNameBox,
} from './styles';

const renderSubMenus = (subMenus: Array<SubRoute>) =>
  subMenus.map(menu => (
    <SubMenuBox onClick={() => false}>
      <LI>- {menu.name}</LI>
    </SubMenuBox>
  ));

const renderMenus = (
  routes: Array<MenuSidebar>,
  onClickMenu: (param: number) => void,
) =>
  routes?.map((menu, index) => (
    <React.Fragment>
      <ContainerMenu
        active={menu.isActived}
        key={index.toString()}
        onClick={() => onClickMenu(index)}>
        <IconBox>
          <Image src={menu.icon} />
        </IconBox>
        <Menu active={menu.isActived}>{menu.label}</Menu>
        <ArrowRightBox active={menu.isActived}>
          <Image src={ArrowRight} />
        </ArrowRightBox>
      </ContainerMenu>
      {menu.isActived &&
        menu.subRoutes.length &&
        renderSubMenus(menu.subRoutes)}
    </React.Fragment>
  ));

const renderRoles = (roles: Array<Roles> | undefined) =>
  roles?.map(role => <Link href="#">{role.nome}</Link>);

const Sidebar: React.FC<SidebarProps> = ({user, data, routes, onClickMenu}) => (
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
      {renderMenus(routes, onClickMenu)}
    </Content>
  </Container>
);
export default Sidebar;
