import React from 'react';
import Main from '../../components/main';
import {HoverState, SystemsHover} from './index.type';
import BookEnabled from '../../../assets/UIkit/images/img-book_enabled.png';
import BookDisabled from '../../../assets/UIkit/images/img-book_disabled.png';
import ClassDiary from '../../../assets/UIkit/images/img-class_diary.png';
import Cadaster from '../../../assets/UIkit/images/img-cadaster.png';
import Planning from '../../../assets/UIkit/images/img-planning.png';

const items = [
  {
    title: 'Planejamento de Ensino',
    subtitle: 'Sistema de Planos e Programas de Ensino',
    iconActived: BookEnabled,
    iconDisabled: BookDisabled,
    type: 'teachingPlanning',
    route: '/home',
  },
  {
    title: 'Diário de Classe',
    subtitle: 'Sistema de geração de diários classe',
    iconActived: ClassDiary,
    iconDisabled: ClassDiary,
    type: null,
    route: '/home',
  },
  {
    title: 'Planejamento Semestral',
    subtitle: 'Sistema de planejamento semestral',
    iconActived: Planning,
    iconDisabled: Planning,
    type: null,
    route: '/home',
  },
  {
    title: 'Gerar Cadastros',
    subtitle: 'Sistema de cadastros',
    iconActived: Cadaster,
    iconDisabled: Cadaster,
    type: null,
    route: '/cadaster',
  },
];

const MainContainer: React.FC = () => {
  const [hover, setHover] = React.useState<HoverState>({
    teachingPlanning: false,
  });

  return (
    <Main
      hover={hover}
      onChangeHover={({type}: SystemsHover) =>
        setHover({...hover, [type]: !hover[type]})
      }
      items={items}
    />
  );
};

export default MainContainer;
