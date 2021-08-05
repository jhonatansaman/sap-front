import React from 'react';
import {MainProps} from './index.type';
import CardOption from './partials/CardOption';
import {
  Container,
  Content,
  Header,
  LogoBox,
  LogoImage,
  TitleBox,
  TitleMain,
  SubtitleMain,
} from './styles';
import LogoUfsc from '../../../assets/UIkit/images/brasao_ufsc.png';

const Main: React.FC<MainProps> = ({hover, onChangeHover, items}) => (
  <Container>
    <Header>
      {/* <LogoBox>
        <LogoImage src={LogoUfsc} />
      </LogoBox> */}
      <TitleBox>
        <TitleMain>SAP-Ara</TitleMain>
        <i>
          <SubtitleMain>
            Sistema Auxiliar de Planejamento Acadêmico - Araranguá{' '}
          </SubtitleMain>
        </i>
      </TitleBox>
    </Header>
    <Content>
      <CardOption hover={hover} onHover={onChangeHover} items={items} />
    </Content>
  </Container>
);

export default Main;
