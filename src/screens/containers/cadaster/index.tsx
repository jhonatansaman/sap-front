import React from 'react';
import IconMessage from '../../../assets/UIkit/images/ico-message.png';
import IconCollegiate from '../../../assets/UIkit/icons/ico-collegiate.svg';
import {alertService} from '../../../services/alert';
import {cagrService} from '../../../services/cagr';
import {getCurrentSemester} from '../../../utils/currentSemester';
import Cadaster from '../../components/cadaster';
import {
  DepartmentsState,
  Disciplines,
  DisciplinesState,
  Teachers,
  TearchersState,
} from './index.type';

const menus = [{label: 'Colegiado', icon: IconCollegiate}];
const currentSemester = getCurrentSemester();

const getInitialData = async (
  setDepartments: (data: DepartmentsState) => void,
) => {
  try {
    const {data} = await cagrService.getAllDepartments();
    setDepartments({data});
  } catch (error) {}
};

const getInitialDataByDepartment = async (
  department: string | null,
  setTeachers: (data: TearchersState) => void,
  setDisciplines: (data: DisciplinesState) => void,
) => {
  try {
    const {data} = await cagrService.getTeachersByDepartment(department);

    if (department) {
      const disciplines = await cagrService.getDisciplinesByDepartment(
        department.split('/')?.[0],
        currentSemester,
      );
      setDisciplines({data: disciplines?.data});
    }

    setTeachers({data});
  } catch (error) {
    alertService.error('Erro ao buscar disciplina');
  }
};

const CadasterContainer: React.FC = () => {
  const [departments, setDepartments] = React.useState<DepartmentsState>({
    data: [],
  });
  const [teachers, setTeachers] = React.useState<TearchersState>({
    data: [],
  });
  const [disciplines, setDisciplines] = React.useState<DisciplinesState>({
    data: [],
  });
  const [departmentSelected, setDepartmentSelected] = React.useState<
    string | null
  >(null);

  React.useEffect(() => {
    getInitialData(setDepartments);
  }, []);

  React.useEffect(() => {
    getInitialDataByDepartment(departmentSelected, setTeachers, setDisciplines);
  }, [departmentSelected]);

  return (
    <Cadaster
      routes={menus}
      departments={departments?.data}
      teachers={teachers?.data}
      disciplines={disciplines?.data}
      onChangeDepartment={(param: string) => setDepartmentSelected(param)}
    />
  );
};

export default CadasterContainer;
