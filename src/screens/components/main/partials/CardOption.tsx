import {History} from 'history';
import React from 'react';
import {useHistory} from 'react-router-dom';
import {HoverState, SystemsHover} from '../../../containers/main/index.type';
import {CardOptionProps} from '../index.type';
import {
  ContainerCardOption,
  DetailsBox,
  Image,
  ImageBox,
  Subtitle,
  Title,
} from '../styles';

const renderItems = (hover: HoverState, items: any, history: History) =>
  items.map((item: any) => (
    <ContainerCardOption onClick={() => history.push('/home')}>
      <ImageBox>
        <Image src={item.iconDisabled} />
      </ImageBox>
      <DetailsBox>
        <Title>{item.title}</Title>
        <Subtitle>{item.subtitle}</Subtitle>
      </DetailsBox>
    </ContainerCardOption>
  ));

const CardOption: React.FC<CardOptionProps> = ({hover, onHover, items}) => {
  const history = useHistory();
  return <>{renderItems(hover, items, history)}</>;
};

export default CardOption;
