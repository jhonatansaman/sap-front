import styled from 'styled-components';
import {UIModifiers} from './index.type';

export const LinkButton = styled.button<UIModifiers>`
  color: ${props => props.color};
  width: ${props => props.width};
  background: ${props => props.backgroundColor};
  height: ${props => props.height};
  border-width: ${props => props.borderWidth};
  border-radius: ${props => props.borderRadius};
  border: ${props => props.border};
  padding: ${props => props.padding};
  flex: ${props => props.flex};
  cursor: pointer;
`;
