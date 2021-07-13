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
  justify-content: center;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
`;

export const ImageBox = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 18px;
`;

export const User = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: ${colors.Primary.black};
`;

export const Dropdown = styled.div`
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${Dropdown}:hover & {
    display: block;
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  border: none;
  outline: none;
  color: black;
  background: white;
  font-family: inherit;
`;

export const Link = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
`;
