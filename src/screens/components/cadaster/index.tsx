import React, {useState} from 'react';
import MainCard from '../../../assets/components/card';
import Header from '../../../assets/components/header';
import Modal from '../../../assets/components/modal';
import Paginator from '../../../assets/components/paginator';
import Sidebar from '../../../assets/components/sidebar';
import {StateRoles} from '../../../assets/components/sidebar/index.type';
import Table from '../../../assets/components/table';
import {TableRow, TD, Th} from '../../../assets/components/table/styles';
import {userService} from '../../../services/user';
import {
  Departments,
  Disciplines,
  Teachers,
} from '../../containers/cadaster/index.type';
import {CadasterProps} from './index.type';
import {
  Container,
  Content,
  InputBox,
  Label,
  Line,
  MainContent,
  Select,
  PaginatorBox,
} from './styles';

const HEADERS = ['Código', 'Disciplina', 'Fase'];
const SIZE_TD = 100 / HEADERS.length;
const ITEM_PER_PAGE = 7;

const renderDepartments = (departments: Array<Departments>) =>
  departments?.map(department => (
    <option value={department.chefeDepartamento.localizacao.sigla}>
      {department.chefeDepartamento.localizacao.sigla + ' - ' + department.nome}
    </option>
  ));

const renderTeachers = (teachers: Array<Teachers>) =>
  teachers?.map(teacher => (
    <option value={teacher.siape}>{teacher.nome}</option>
  ));

const renderDisciplines = (disciplines: Array<Disciplines>) =>
  disciplines?.map(discipline => (
    <>
      <TableRow>
        <TD width={SIZE_TD}>{discipline.codigoDisciplina}</TD>
        <TD width={SIZE_TD}>{discipline.nomeDisciplina}</TD>
        <TD width={SIZE_TD}>{discipline.codigoTurma}</TD>
      </TableRow>
    </>
  ));

const {user}: any = userService.getUserInfo();

const Cadaster: React.FC<CadasterProps> = ({
  routes,
  departments,
  teachers,
  disciplines,
  onChangeDepartment,
  isShownModal,
  currentPage,
  setCurrentPage,
}) => {
  const [roles] = useState<StateRoles>({data: userService.getRoles()});

  return (
    <Container>
      <Sidebar user={user} data={roles.data} routes={routes} />
      <Content>
        <Header />
        <MainContent>
          <MainCard>
            <Line>
              <InputBox>
                <Label>Departamentos</Label>
                <Select
                  name="select"
                  onChange={param => onChangeDepartment(param.target.value)}>
                  {renderDepartments(departments)}
                </Select>
              </InputBox>
              <InputBox>
                <Label>Professor</Label>
                <Select disabled={!teachers?.length} name="select">
                  {renderTeachers(teachers)}
                </Select>
              </InputBox>
            </Line>
          </MainCard>
        </MainContent>
        <MainContent>
          <MainCard>
            <Table
              tableHeaders={HEADERS}
              renderRows={renderDisciplines(
                disciplines.slice(
                  currentPage * ITEM_PER_PAGE,
                  ITEM_PER_PAGE * (currentPage + 1),
                ),
              )}
            />
            <PaginatorBox>
              <Paginator
                pages={disciplines.length / 7}
                action={param => setCurrentPage(param)}
                currentPage={currentPage}
              />
            </PaginatorBox>
          </MainCard>
        </MainContent>
      </Content>
      {isShownModal && <Modal />}
    </Container>
  );
};

export default Cadaster;
