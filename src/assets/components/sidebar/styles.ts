import styled, {css, keyframes} from 'styled-components';
import colors from '../../UIkit/styles/colors';
import {UIModifiers} from './index.type';

const modifiers = {
  arrowBoxRight: {
    active: css`
      transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
    `,
  },
  containerMenu: {
    active: css`
      background: ${colors.Primary.blueOpacity};
      border-left: 4px solid ${colors.Primary.darkBlue};
    `,
  },
};

export const Container = styled.aside`
  height: 100vh;
  width: 256px;
  display: flex;
  background: ${colors.Main.white};
  opacity: 1px;
  flex-direction: column;
  border-right: 1px solid;
  border-color: ${colors.Main.divider};
`;

export const Header = styled.div`
  height: 144px;
  border-bottom: 1px solid;
  border-color: ${colors.Main.divider};
  padding: 16px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

export const Top = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 23px;
  object-fit: cover;
`;

export const ImageBox = styled.div`
  height: 46px;
  width: 46px;
  border-radius: 23px;
`;

export const User = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: ${colors.Primary.black};
  text-transform: capitalize;
`;

export const Dropdown = styled.div`
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  font-family: inherit;
  margin: 0;
  padding: 0px;
  cursor: pointer;
`;

export const Button = styled.button`
  font-size: 16px;
  border: none;
  outline: none;
  color: black;
  background: white;
  padding: 0px;
  font-family: inherit;
  cursor: pointer;
`;

export const Link = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
`;

export const Middle = styled.div`
  display: flex;
  flex: 0.5;
`;

export const Bottom = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: space-between;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${Bottom}:hover & {
    display: block;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
`;

export const Menu = styled.p<UIModifiers>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: ${props =>
    props.active ? colors.Primary.blue : colors.Primary.darkBlue};
  letter-spacing: 0.01em;
  margin-left: 15px;
`;

export const ContainerMenu = styled.div<UIModifiers>`
  height: 40px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;

  ${props => props.active && modifiers.containerMenu.active}
`;

export const Left = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  justify-content: flex-start;
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const IconBox = styled.div`
  height: 25px;
  width: 25px;
`;

export const TitleBox = styled.div`
  height: 60px;
  border-bottom: 1px solid ${colors.Main.divider};
  justify-content: center;
  padding: 0px 24px;
`;

export const Title = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: ${colors.Primary.blue};
`;

export const Content = styled.div`
  padding: 0px 24px;
`;

export const UserBox = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 46px;
  align-items: center;
`;

export const UserNameBox = styled.p`
  margin-left: 9px;
`;

export const UserName = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin: 0;
  text-transform: capitalize;
`;

export const Email = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: ${colors.Primary.gray};
  margin: 0;
`;

export const ArrowRightBox = styled.div<UIModifiers>`
  margin-left: auto;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  -webkit-transition: -webkit-transform 04s ease-in-out;
  -ms-transition: -ms-transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out;
  ${props => props.active && modifiers.arrowBoxRight.active}
`;

const fadeInAnimation = keyframes` 
 from { opacity: 0; }
    to   { opacity: 1; }
`;

export const SubMenuBox = styled.div`
  padding: 5px 10px;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  animation: ${fadeInAnimation} 0.5s;
  background: ${colors.Primary.blueOpacity};
  border-left: 4px solid ${colors.Primary.darkBlue};
`;

export const LI = styled.p<UIModifiers>`
  color: ${props =>
    props.active ? colors.Primary.blue : colors.Primary.darkBlue};
  font-size: 12px;
  font-family: Poppins;
  cursor: pointer;
  margin-left: 10px;
`;

export const ContentMenu = styled.div``;
