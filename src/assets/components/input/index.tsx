import React from 'react';

import {Button, Div, Input} from './styles';

import IconLupa from '../../UIkit/images/lupa.svg';

import {UIModifiers} from './index.type';

const InputSearch: React.FC<UIModifiers> = ({
  backgroundColor,
  display,
  alignSelf,
  flex,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  width,
  fontSize,
  borderColor,
  fontWeight,
}) => (
  <Button>
    <Div>
      <img src={IconLupa} alt="Search" />
      <Input
        backgroundColor={backgroundColor}
        display={display}
        alignSelf={alignSelf}
        flex={flex}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        width={width}
        fontSize={fontSize}
        borderColor={borderColor}
        fontWeight={fontWeight}
        placeholder="Pesquisa"
        type="text"></Input>
    </Div>
  </Button>
);

export default InputSearch;
