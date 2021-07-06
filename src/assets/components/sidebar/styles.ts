import styled from 'styled-components';
import colors from '../../UIkit/styles/colors';

export const Container = styled.aside`
  height: 100vh;
  width: 256px;
  display: flex;
  background: ${colors.Main.white};
  flex-direction: column;
  border-right: 1px solid;
  border-color: ${colors.Main.divider};
`;

export const Header = styled.div`
  height: 144px;
  border-bottom: 1px solid;
  border-color: ${colors.Main.divider};
  padding-left: 16px;
`;

export const ImageBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Image = styled.img``;

export const User = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: ${colors.Primary.black};
`;
