import styled from 'styled-components';
import colors from '../../assets/UIkit/styles/colors';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  background: ${colors.background.white};
  justify-content: center;
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
`;
export const Content = styled.div`
  width: 961px;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
export const LoginBox = styled.div`
  width: 400px;
  height: 491px;
  background: #efefef;
  display: flex;
  flex-direction: column;
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
  background: ${colors.background.white};
  border-color: transparent;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
`;

export const Button = styled.button`
  background: linear-gradient(to bottom, #0088cc, #0044cc);
  padding: 10px;
  color: white;
`;

export const ContentLeft = styled.div``;
export const ContentRight = styled.div``;
export const UFSCLogo = styled.img``;
