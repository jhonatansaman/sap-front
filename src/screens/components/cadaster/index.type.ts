import {MenuSidebar} from '../../../assets/components/sidebar/index.type';
import {
  APIResponseDisciplines,
  Departments,
  Disciplines,
  DisciplineType,
  Teachers,
  TeacherType,
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
  selectedDisciplines: Array<DisciplineType>;
  onSelectDisciplines: (param: DisciplineType) => void;
  onChangeTeacher: (param: number) => void;
  onClickSave: () => void;
}
