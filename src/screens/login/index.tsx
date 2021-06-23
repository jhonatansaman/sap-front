import React from 'react';
import {
  Container,
  BannerSetic,
  LoginContent,
  Content,
  LoginBox,
  BannerBox,
  ImageBox,
  ImageSetic,
  BannerTextBox,
  BannerTitleText,
  BannerInfoText,
  BannerText,
  Input,
  Button,
  ContentHeader,
  ContentLeft,
  ContentRight,
  UFSCLogo,
  ContentCenter,
  TitleLogin,
  Header,
  Main,
  Title,
} from './styles';
import Banner from '../../assets/UIkit/images/banner-setic.jpg';
import Logo from '../../assets/UIkit/images/brasao_ufsc.png';

const Login: React.FC = () => (
  <Container>
    <Header>
      <Title>SPPEN - UFSC</Title>
    </Header>
    <Main>
      <Content>
        <ContentHeader>
          <UFSCLogo src={Logo} />
          <TitleLogin>Sistema de Autenticação Centralizada</TitleLogin>
        </ContentHeader>
        <ContentCenter style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
          <BannerBox>
            <BannerSetic>
              <ImageBox>
                <ImageSetic src={Banner} />
              </ImageBox>
              <BannerTextBox>
                <BannerText>
                  <BannerTitleText>Facilidades de Uso</BannerTitleText>
                  <BannerInfoText>
                    Entre em vários sistemas UFSC se autenticando apenas uma
                    vez.
                  </BannerInfoText>
                </BannerText>
              </BannerTextBox>
            </BannerSetic>
          </BannerBox>

          <LoginBox>
            <LoginContent>
              <Input placeholder="idUFSC, Matrícula, E-mail, CPF, ou Passaporte" />
              <Input placeholder="Senha" />
              <Button>Entrar</Button>
            </LoginContent>
          </LoginBox>
        </ContentCenter>
      </Content>
    </Main>
  </Container>
);

export default Login;
