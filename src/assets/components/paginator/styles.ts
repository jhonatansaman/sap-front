import styled from 'styled-components';
import colors from '../../UIkit/styles/colors';
import {UIModifiers} from './index.type';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const Box = styled.div<UIModifiers>`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.Primary.darkBlue};
  cursor: pointer;
  margin: 1px;
  background: ${props =>
    props.actived ? colors.Primary.darkBlue : 'transparent'};
`;

export const Page = styled.p<UIModifiers>`
  font-size: 12px;
  font-family: Poppins;
  color: ${props =>
    props.actived ? colors.Main.white : colors.Primary.darkBlue};
`;
