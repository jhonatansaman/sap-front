import React from 'react';
import IconMessage from '../../../assets/UIkit/images/ico-message.png';
import IconCollegiate from '../../../assets/UIkit/icons/ico-collegiate.svg';
import IconCollegiateActived from '../../../assets/UIkit/icons/ico-collegiate_actived.svg';
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

const menus = [
  {label: 'Colegiado', icon: IconCollegiate, iconAtived: IconCollegiateActived},
];
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
  setIsShownModal: (param: boolean) => void,
  setCurrentPage: (param: number) => void,
) => {
  try {
    setIsShownModal(true);
    const {data} = await cagrService.getTeachersByDepartment(department);

    setTeachers({data});
    if (department) {
      const disciplines = await cagrService.getDisciplinesByDepartment(
        department.split('/')?.[0],
        currentSemester,
      );
      setDisciplines({data: disciplines?.data});
    }

    setIsShownModal(false);
    setCurrentPage(0);
  } catch (error) {
    alertService.error('Erro ao buscar disciplina');
  }
};

const onSelectDiscipline = (
  value: string,
  disciplinesSelected: Array<string>,
  setDisciplineSelected: (param: Array<string>) => void,
) => {
  const alreadySelect: boolean = disciplinesSelected?.some(
    code => code === value,
  );
  if (alreadySelect) {
    return setDisciplineSelected(
      disciplinesSelected?.filter(code => code !== value),
    );
  }

  return setDisciplineSelected([...disciplinesSelected, value]);
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
  const [isShownModal, setIsShownModal] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [selectedDisciplines, setSelectedDisciplines] = React.useState<
    Array<string>
  >([]);

  React.useEffect(() => {
    getInitialData(setDepartments);
  }, []);

  React.useEffect(() => {
    getInitialDataByDepartment(
      departmentSelected,
      setTeachers,
      setDisciplines,
      setIsShownModal,
      setCurrentPage,
    );
  }, [departmentSelected]);

  return (
    <Cadaster
      routes={menus}
      departments={departments?.data}
      teachers={teachers?.data}
      disciplines={disciplines?.data}
      onChangeDepartment={(param: string) => setDepartmentSelected(param)}
      isShownModal={isShownModal}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      onSelectDisciplines={(param: string) =>
        onSelectDiscipline(param, selectedDisciplines, setSelectedDisciplines)
      }
      selectedDisciplines={selectedDisciplines}
    />
  );
};

export default CadasterContainer;
