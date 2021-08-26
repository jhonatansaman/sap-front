import React from 'react';
import IconCollegiate from '../../../assets/UIkit/icons/ico-collegiate.svg';
import IconCollegiateActived from '../../../assets/UIkit/icons/ico-collegiate_actived.svg';
import {alertService} from '../../../services/alert';
import {cagrService} from '../../../services/cagr';
import {collegiateService} from '../../../services/graphql/collegiate';
import {getCurrentSemester} from '../../../utils/currentSemester';
import Cadaster from '../../components/cadaster';
import {
  DepartmentsState,
  DisciplinesState,
  DisciplineType,
  MemberCollegiateState,
  TeacherType,
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
  value: DisciplineType,
  memberCollegiate: MemberCollegiateState,
  setMemberCollegiate: (param: MemberCollegiateState) => void,
) => {
  const alreadySelect: boolean = memberCollegiate?.discipline.some(
    discipline => discipline.disciplineCode === value.disciplineCode,
  );

  if (alreadySelect) {
    return setMemberCollegiate({
      ...memberCollegiate,
      discipline: memberCollegiate?.discipline.filter(
        discipline => discipline.disciplineCode !== value.disciplineCode,
      ),
    });
  }

  return setMemberCollegiate({
    ...memberCollegiate,
    discipline: [...memberCollegiate?.discipline, value],
  });
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
  const [isShownModal, setIsShownModal] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const [memberCollegiate, setMemberCollegiate] =
    React.useState<MemberCollegiateState>({
      department: '',
      discipline: [],
      teacher: null,
    });

  React.useEffect(() => {
    getInitialData(setDepartments);
  }, []);

  React.useEffect(() => {
    getInitialDataByDepartment(
      memberCollegiate.department,
      setTeachers,
      setDisciplines,
      setIsShownModal,
      setCurrentPage,
    );
  }, [memberCollegiate?.department]);

  return (
    <Cadaster
      routes={menus}
      departments={departments?.data}
      teachers={teachers?.data}
      disciplines={disciplines?.data}
      onChangeDepartment={(param: string) =>
        setMemberCollegiate({...memberCollegiate, department: param})
      }
      onChangeTeacher={(param: number) =>
        setMemberCollegiate({
          ...memberCollegiate,
          teacher: {
            teacherName: teachers?.data?.[param]?.nome,
            siape: teachers?.data?.[param]?.siape,
          },
        })
      }
      isShownModal={isShownModal}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      selectedDisciplines={memberCollegiate?.discipline}
      onSelectDisciplines={(param: DisciplineType) =>
        onSelectDiscipline(param, memberCollegiate, setMemberCollegiate)
      }
      onClickSave={() => collegiateService.createOne(memberCollegiate)}
    />
  );
};

export default CadasterContainer;
