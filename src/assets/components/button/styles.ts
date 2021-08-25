import styled from 'styled-components';
import colors from '../../UIkit/styles/colors';
import {UIModifiers} from './index.type';

// export const LinkButton = styled.button<UIModifiers>`
//   color: ${props => props.color};
//   width: ${props => props.width};
//   background: ${props => props.backgroundColor};
//   height: ${props => props.height};
//   border-width: ${props => props.borderWidth};
//   border-radius: ${props => props.borderRadius};
//   border: ${props => props.border};
//   padding: ${props => props.padding};
//   flex: ${props => props.flex};
//   cursor: pointer;
// `;

export const Container = styled.div`
  width: 160px;
  height: 42px;
  background: ${colors.Primary.accent_blue};
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
  border-radius: 4px;
  cursor: pointer;
`;

export const Text = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${colors.Main.white};
`;
