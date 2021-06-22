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
} from './styles';
import Banner from '../../assets/UIkit/images/banner-setic.jpg';

const Login: React.FC = () => (
  <Container>
    <Content>
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
        </LoginContent>
      </LoginBox>
    </Content>
  </Container>
);

export default Login;
