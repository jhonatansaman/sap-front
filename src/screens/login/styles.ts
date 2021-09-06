import styled from 'styled-components';
import colors from '../../assets/UIkit/styles/colors';

export const Container = styled.div`
  min-height: 100vh;
  background: ${colors.Main.white};
`;

export const BannerSetic = styled.div`
  width: 530.58px;
  height: 378.76px;
`;

export const LoginContent = styled.div`
  display: flex;
  flex: 1;
  margin: 20px;
  flex-direction: column;
  justify-content: space-between;
`;
export const Content = styled.div`
  width: 961px;
  height: 600px;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;
export const LoginBox = styled.div`
  width: 400px;
  height: 491px;
  background: #efefef;
  display: flex;
  flex-direction: column;
`;

export const AuthIcon = styled.img`
  margin-right: 10px;
`;

export const BannerBox = styled.div`
  margin-right: 20px;
`;

export const ImageBox = styled.div`
  height: 264px;
`;

export const ImageSetic = styled.img`
  width: 100%;
`;

export const BannerTextBox = styled.div`
  height: 114px;
  border: 4px solid #ececec;
  display: flex;
  align-items: center;
`;

export const BannerTitleText = styled.p`
  margin: 0;
  font-weight: bold;
  color: #606060;
  font-family: Arial, Verdana, sans-serif;
  font-size: 0.875rem;
`;

export const BannerInfoText = styled.p`
  color: #606060;
  font-family: Arial, Verdana, sans-serif;
  font-size: 0.875rem;
`;

export const BannerText = styled.div`
  margin-left: 20px;
`;

export const Input = styled.input`
  background: ${colors.Main.white};
  border-color: transparent;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
`;

export const Button = styled.button`
  background: linear-gradient(to bottom, #0088cc, #0044cc);
  height: 48px;
  color: white;
  border-width: 0px;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
export const ContentLeft = styled.div``;
export const ContentRight = styled.div``;
export const ContentCenter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
export const UFSCLogo = styled.img`
  width: 293px;
  height: 64px;
`;

export const TitleLogin = styled.p`
  font-size: 20px;
  color: #606060;
  margin-right: 40px;
  font-weight: bold;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  height: 53px;
  background: #606060;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Title = styled.h3`
  color: white;
`;
