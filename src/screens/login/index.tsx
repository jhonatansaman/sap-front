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
  AuthIcon,
} from './styles';
import IconKey from '../../assets/UIkit/images/ufsc.png';
import {useHistory} from 'react-router-dom';
import {History} from 'history';

const onChange = (
  event: ChangeEvent<HTMLInputElement>,
  credentials: AuthProps,
  setCredentials: (params: AuthProps) => void,
) => {
  const {name, value} = event.target;
  setCredentials({...credentials, [name]: value});
};

const onSubmit = async (credentials: AuthProps, history: History) => {
  try {
    const {data} = await userService.auth(credentials);

    if (data?.user?.erro) {
      return alertService.error('Usuário ou senha inválidos!');
    }

    localStorage.setItem('user', JSON.stringify(data));
    history.push('/home');
  } catch (error) {
    return alertService.error(error?.response?.data?.message);
  }
};

const onKeyPress = (
  event: React.KeyboardEvent,
  credentials: AuthProps,
  history: History,
) => {
  if (event.key === 'Enter') {
    onSubmit(credentials, history);
  }
};

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<AuthProps>({
    identificacao: '',
    senha: '',
  });
  const history = useHistory();

  return (
    <Container>
      <Header>
        <AuthIcon src={IconKey} /> <Title>SPPEN - UFSC</Title>
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
                <div
                  style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                  <Input
                    placeholder="idUFSC, Matrícula, E-mail, CPF, ou Passaporte"
                    name="identificacao"
                    onKeyDown={event => onKeyPress(event, credentials, history)}
                    type="text"
                    onChange={event =>
                      onChange(event, credentials, setCredentials)
                    }
                  />
                  <Input
                    placeholder="Senha"
                    name="senha"
                    type="password"
                    onKeyDown={event => onKeyPress(event, credentials, history)}
                    onChange={event =>
                      onChange(event, credentials, setCredentials)
                    }
                  />
                  <Button onClick={() => onSubmit(credentials, history)}>
                    Entrar
                  </Button>
                </div>
              </LoginContent>
            </LoginBox>
          </ContentCenter>
        </Content>
      </Main>
    </Container>
  );
};

export default Login;
