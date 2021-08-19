import {MenuSidebar} from '../../../assets/components/sidebar/index.type';
import {Departments, Teachers} from '../../containers/cadaster/index.type';

export interface CadasterProps {
  routes: Array<MenuSidebar>;
  departments: Array<Departments>;
  teachers: Array<Teachers>;
  onChangeDepartment: (param: string) => void;
}
