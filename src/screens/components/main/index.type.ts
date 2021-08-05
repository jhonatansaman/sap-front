import {
  HoverState,
  SystemsHover,
  SystemsOptions,
} from '../../containers/main/index.type';

export interface System {
  title: string;
  subtitle: string;
  iconActived: any;
  iconDisabled: any;
  type: SystemsOptions;
}

export interface MainProps {
  hover: HoverState;
  onChangeHover: ({type}: SystemsHover) => void;
  items: any;
}

export interface CardOptionProps {
  hover: HoverState;
  onHover: ({type}: SystemsHover) => void;
  items: any;
}
