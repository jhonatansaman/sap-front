import {MenuSidebar} from '../../../assets/components/sidebar/index.type';
import {
  APIResponseDisciplines,
  Departments,
  Disciplines,
  Teachers,
} from '../../containers/cadaster/index.type';

export interface CadasterProps {
  routes: Array<MenuSidebar>;
  departments: Array<Departments>;
  teachers: Array<Teachers>;
  disciplines: Array<APIResponseDisciplines>;
  onChangeDepartment: (param: string) => void;
  isShownModal: boolean;
  currentPage: number;
  setCurrentPage: (param: number) => void;
  selectedDisciplines: Array<string>;
  onSelectDisciplines: (param: string) => void;
}
