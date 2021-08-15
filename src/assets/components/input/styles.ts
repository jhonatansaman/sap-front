import styled from 'styled-components';
import {UIModifiers} from './index.type';

export const Container = styled.div`
  width: 100%;
  background: white;
`;

export const InputField = styled.input`
  width: 100%;
  height: 38px;
  border-color: transparent;
  border: 1px solid ${colors.Main.divider};
`;

export const Button = styled.button`
  background: #fff;
  border-color: transparent;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 0px;
  display: flex;
`;

export const Div = styled.div`
  background: #fff;
  padding: 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input<UIModifiers>`
  background: ${props => props.backgroundColor};
  display: ${props => props.display};
  align-self: ${props => props.alignSelf};
  flex: ${props => props.flex};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  width: ${props => props.width};
  font-size: ${props => props.fontSize};
  border-color: ${props => props.borderColor};
  font-weight: ${props => props.fontWeight};
`;
