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
  ContentLeft,
  ContentRight,
  UFSCLogo,
} from './styles';
import Banner from '../../assets/UIkit/images/banner-setic.jpg';
import Logo from '../../assets/UIkit/images/brasao_ufsc.png';

const Login: React.FC = () => (
  <Container>
    <Content>
      <div style={{display: 'flex', flex: 1}}>
        <img src={Logo} alt="" style={{width: 293, height: 64}} />
      </div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
        <BannerBox>
          <BannerSetic>
            <ImageBox>
              <ImageSetic src={Banner} />
            </ImageBox>
            <BannerTextBox>
              <BannerText>
                <BannerTitleText>Facilidades de Uso</BannerTitleText>
                <BannerInfoText>
                  Entre em vários sistemas UFSC se autenticando apenas uma vez.
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
      </div>
    </Content>
  </Container>
);

export default Login;
