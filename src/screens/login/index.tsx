import React, {ChangeEvent, useState} from 'react';
import Banner from '../../assets/UIkit/images/banner-setic.jpg';
import Logo from '../../assets/UIkit/images/brasao_ufsc.png';
import {alertService} from '../../services/alert';
import {userService} from '../../services/user';
import {AuthProps} from '../../types/apiResponse';
import {
  BannerBox,
  BannerInfoText,
  BannerSetic,
  BannerText,
  BannerTextBox,
  BannerTitleText,
  Button,
  Container,
  Content,
  ContentCenter,
  ContentHeader,
  Header,
  ImageBox,
  ImageSetic,
  Input,
  LoginBox,
  LoginContent,
  Main,
  Title,
  TitleLogin,
  UFSCLogo,
} from './styles';

const onChange = (
  event: ChangeEvent<HTMLInputElement>,
  credentials: AuthProps,
  setCredentials: (params: AuthProps) => void,
) => {
  const {name, value} = event.target;
  setCredentials({...credentials, [name]: value});
};

const onSubmit = async (credentials: AuthProps) => {
  try {
    const {data} = await userService.auth(credentials);
    if (data.erro) {
      return alertService.error('Usuário ou senha inválidos');
    }
  } catch (error) {
    return alertService.error(error.response.data.message);
  }
};

const onKeyPress = (event: React.KeyboardEvent, credentials: AuthProps) => {
  if (event.key === 'Enter') {
    onSubmit(credentials);
  }
};

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<AuthProps>({
    identificacao: '',
    senha: '',
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
                  onKeyDown={event => onKeyPress(event, credentials)}
                  type="text"
                  onChange={event =>
                    onChange(event, credentials, setCredentials)
                  }
                />
                <Input
                  placeholder="Senha"
                  name="senha"
                  type="password"
                  onKeyDown={event => onKeyPress(event, credentials)}
                  onChange={event =>
                    onChange(event, credentials, setCredentials)
                  }
                />
                <Button onClick={() => onSubmit(credentials)}>Entrar</Button>
              </LoginContent>
            </LoginBox>
          </ContentCenter>
        </Content>
      </Main>
    </Container>
  );
};

export default Login;
