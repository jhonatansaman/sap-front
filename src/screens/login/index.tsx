import React, { useState, ChangeEvent } from 'react';
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
import { AuthProps } from '../../types/apiResponse';
import { userService } from '../../services/user';

const onChange = (
    event: ChangeEvent<HTMLInputElement>, 
    credentials: AuthProps, 
    setCredentials: (params: AuthProps) => void
  ) => {
  const { name, value } = event.target;
  setCredentials({...credentials, [name]: value})
}

const onSubmit = async (credentials: AuthProps) => {
  try {
    await userService.auth(credentials);
    alert('logado com sucesso');
  } catch (error) {
    alert('erro ao logar')
  }
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<AuthProps>({
    identificacao: '',
    senha: ''
  });

  return (
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
        <ContentCenter>
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
              <Input 
                placeholder="idUFSC, Matrícula, E-mail, CPF, ou Passaporte" 
                name="identificacao"
                type="text"
                onChange={(event) => onChange(event, credentials, setCredentials )}
                />
              <Input 
                placeholder="Senha"
                name="senha"
                type="password"
                onChange={(event) => onChange(event, credentials, setCredentials)}
              />
              <Button onClick={() => onSubmit(credentials)}>Entrar</Button>
            </LoginContent>
          </LoginBox>
        </ContentCenter>
      </Content>
    </Main>
  </Container>
  );
}

export default Login;
