import React from 'react';
import {useMutation} from '@apollo/client';
import {useRouteMatch} from 'react-router-dom';
import {alertService} from '../../../services/alert';
import {cagrService} from '../../../services/cagr';
import {CREATE_ONE_MEMBER_COLLEGIATE} from '../../../services/graphql/collegiate';
import {getCurrentSemester} from '../../../utils/currentSemester';
import Cadaster from '../../components/cadaster';
import {
  CadasterContainerProps,
  DepartmentsState,
  DisciplinesState,
  DisciplineType,
  MemberCollegiateState,
  TearchersState,
} from './index.type';

const initialData: MemberCollegiateState = {
  department: '',
  discipline: [],
  teacher: null,
};

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

const submit = async (
  createOne: any,
  memberCollegiate: MemberCollegiateState,
  setIsShownModal: (param: boolean) => void,
  setMemberCollegiate: (param: MemberCollegiateState) => void,
) => {
  try {
    setIsShownModal(true);
    await createOne({variables: {collegiate: memberCollegiate}});
    setIsShownModal(false);

    setMemberCollegiate(initialData);
    alertService.success('Plano cadastrado com sucesso!');
  } catch (error) {
    setIsShownModal(false);
  }
};

const CadasterContainer: React.FC<CadasterContainerProps> = ({
  routes,
  onChangeRoute,
}) => {
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

  const [createOne] = useMutation<{collegiate: MemberCollegiateState[]}>(
    CREATE_ONE_MEMBER_COLLEGIATE,
  );

  const [memberCollegiate, setMemberCollegiate] =
    React.useState<MemberCollegiateState>(initialData);

  const {path}: any = useRouteMatch();

  React.useEffect(() => {
    getInitialData(setDepartments);
  }, []);

  React.useEffect(() => {
    const changeRoutes = [...routes];
    changeRoutes.forEach((route, index) => {
      route.subRoutes.forEach(subRoute => {
        if (subRoute.route === path) {
          changeRoutes[index] = {...changeRoutes[index], isActived: true};
        }
      });
    });
    onChangeRoute(changeRoutes);
  }, [routes]);

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
      routes={routes}
      departments={departments?.data}
      teachers={teachers?.data}
      disciplines={disciplines?.data}
      onChangeDepartment={(param: string) =>
        setMemberCollegiate({
          ...memberCollegiate,
          department: param,
          teacher: {
            teacherName: teachers?.data?.[0].nome,
            siape: teachers?.data?.[0]?.siape.toString(),
          },
        })
      }
      onChangeTeacher={(param: number) =>
        setMemberCollegiate({
          ...memberCollegiate,
          teacher: {
            teacherName: teachers?.data?.[param]?.nome,
            siape: teachers?.data?.[param]?.siape.toString(),
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
      onClickSave={() =>
        submit(
          createOne,
          memberCollegiate,
          setIsShownModal,
          setMemberCollegiate,
        )
      }
      onSearchChange={(param: string) => console.log(param)}
    />
  );
};

export default CadasterContainer;
