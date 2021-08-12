import React from 'react';
import {LinkButton} from './styles';

import {UIModifiers} from './index.type';

const Button: React.FC<UIModifiers> = ({
  color,
  width,
  backgroundColor,
  height,
  borderWidth,
  borderRadius,
  border,
  padding,
  flex,
  children,
}) => (
  <LinkButton
    color={color}
    width={width}
    backgroundColor={backgroundColor}
    height={height}
    borderWidth={borderWidth}
    borderRadius={borderRadius}
    border={border}
    padding={padding}
    flex={flex}>
    {children}
  </LinkButton>
);

export default Button;
