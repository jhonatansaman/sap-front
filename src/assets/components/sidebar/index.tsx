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
  ContainerMenu,
  Left,
  Right,
  IconBox,
} from './styles';
import Arrow from '../../UIkit/images/arrow-drop-down.png';
import IconMessage from '../../UIkit/images/ico-message.png';
const menus = [
  {label: 'Mensagens', icon: IconMessage},
  {label: 'Cadastros', icon: IconMessage},
  {label: 'Relatórios', icon: IconMessage},
  {label: 'Planos de Ensino', icon: IconMessage},
  {label: 'Atualizar Dados', icon: IconMessage},
];

const renderMenus = () =>
  menus.map(menu => (
    <ContainerMenu>
      <Left>
        <IconBox>
          <Image src={menu.icon} />
        </IconBox>
      </Left>
      <Right>{menu.label}</Right>
    </ContainerMenu>
  ));

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
          <Button>{data?.papeis?.[0]?.nome}</Button>
          <DropdownContent>{renderRoles(data?.papeis)}</DropdownContent>
        </Dropdown>
        <img src={Arrow} />
      </Bottom>
    </Header>
    {renderMenus()}
  </Container>
);
export default Sidebar;
