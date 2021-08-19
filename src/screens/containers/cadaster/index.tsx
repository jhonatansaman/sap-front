import React from 'react';
import IconMessage from '../../../assets/UIkit/images/ico-message.png';
import {cagrService} from '../../../services/cagr';
import Cadaster from '../../components/cadaster';
import {DepartmentsState, Teachers, TearchersState} from './index.type';

const menus = [{label: 'Membro do colegiado', icon: IconMessage}];

const getInitialData = async (
  setDepartments: (data: DepartmentsState) => void,
) => {
  try {
    const {data} = await cagrService.getAllDepartments();
    setDepartments({data});
  } catch (error) {}
};

const getTeachersByDepartment = async (
  department: string | null,
  setTeachers: (data: TearchersState) => void,
) => {
  try {
    const {data} = await cagrService.getTeachersByDepartment(department);
    setTeachers({data});
  } catch (error) {}
};

const CadasterContainer: React.FC = () => {
  const [departments, setDepartments] = React.useState<DepartmentsState>({
    data: [],
  });
  const [teachers, setTeachers] = React.useState<TearchersState>({
    data: [],
  });
  const [departmentSelected, setDepartmentSelected] = React.useState<
    string | null
  >(null);

  React.useEffect(() => {
    getInitialData(setDepartments);
  }, []);

  React.useEffect(() => {
    getTeachersByDepartment(departmentSelected, setTeachers);
  }, [departmentSelected]);

  return (
    <Cadaster
      routes={menus}
      departments={departments?.data}
      teachers={teachers?.data}
      onChangeDepartment={(param: string) => setDepartmentSelected(param)}
    />
  );
};

export default CadasterContainer;
