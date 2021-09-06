import React from 'react';
import Button from '../../../assets/components/button';
import MainCard from '../../../assets/components/card';
import Header from '../../../assets/components/header';
import Modal from '../../../assets/components/modal';
import Paginator from '../../../assets/components/paginator';
import Table from '../../../assets/components/table';
import {TableRow, TD} from '../../../assets/components/table/styles';
import {
  APIResponseDisciplines,
  Departments,
  DisciplineType,
  Teachers,
} from '../../containers/cadaster/index.type';
import {CadasterProps} from './index.type';
import {
  ButtonBox,
  CardDiscipline,
  CheckBox,
  Close,
  CloseButton,
  CodeDiscipline,
  Container,
  Content,
  InputBox,
  Label,
  Line,
  MainContent,
  PaginatorBox,
  Select,
  SelectedBox,
} from './styles';

const HEADERS = ['', 'Código', 'Disciplina', 'Fase'];
const SIZE_TD = 90 / HEADERS.length;
const ITEM_PER_PAGE = 7;
const CHECKBOX_COLUMN_WIDTH = 10;

const renderDepartments = (departments: Array<Departments>) =>
  departments?.map(department => (
    <option value={department.chefeDepartamento.localizacao.sigla}>
      {department.chefeDepartamento.localizacao.sigla + ' - ' + department.nome}
    </option>
  ));

const renderTeachers = (teachers: Array<Teachers>) =>
  teachers?.map((teacher, index) => (
    <option key={index} value={index}>
      {teacher.nome}
    </option>
  ));

const renderDisciplines = (
  disciplines: Array<APIResponseDisciplines>,
  selectedDisciplines: Array<DisciplineType>,
  onSelectDisciplines: (param: DisciplineType) => void,
) =>
  disciplines?.map(discipline => (
    <React.Fragment>
      <TableRow>
        <TD width={CHECKBOX_COLUMN_WIDTH}>
          <CheckBox
            type="checkbox"
            onChange={() =>
              onSelectDisciplines({
                disciplineCode: discipline.codigo,
                disciplineName: discipline.nome,
              })
            }
            checked={selectedDisciplines.some(
              codeDiscipline =>
                codeDiscipline.disciplineCode === discipline.codigo,
            )}
          />
        </TD>
        <TD width={SIZE_TD}>{discipline.codigo}</TD>
        <TD width={SIZE_TD}>{discipline.nome}</TD>
        <TD width={SIZE_TD}>{discipline.fase}</TD>
      </TableRow>
    </React.Fragment>
  ));

const renderCards = (
  disciplines: Array<DisciplineType>,
  onSelectDisciplines: (param: DisciplineType) => void,
) =>
  disciplines?.map(discipline => (
    <CardDiscipline>
      <CodeDiscipline>{discipline.disciplineCode}</CodeDiscipline>
      <Close onClick={() => onSelectDisciplines(discipline)}>
        <CloseButton>X</CloseButton>
      </Close>
    </CardDiscipline>
  ));

const Cadaster: React.FC<CadasterProps> = ({
  routes,
  departments,
  teachers,
  disciplines,
  onChangeDepartment,
  isShownModal,
  currentPage,
  setCurrentPage,
  selectedDisciplines,
  onSelectDisciplines,
  onChangeTeacher,
  onClickSave,
}) => {
  return (
    <Container>
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
                <Select
                  disabled={!teachers?.length}
                  name="select"
                  onChange={param =>
                    onChangeTeacher(Number(param.target.value))
                  }>
                  {renderTeachers(teachers)}
                </Select>
              </InputBox>
            </Line>
          </MainCard>
        </MainContent>
        {selectedDisciplines?.length ? (
          <SelectedBox>
            {renderCards(selectedDisciplines, onSelectDisciplines)}
            <ButtonBox>
              <Button title="Salvar" action={onClickSave} />
            </ButtonBox>
          </SelectedBox>
        ) : null}
        <MainContent>
          <MainCard>
            <Table
              tableHeaders={HEADERS}
              renderRows={renderDisciplines(
                disciplines.slice(
                  currentPage * ITEM_PER_PAGE,
                  ITEM_PER_PAGE * (currentPage + 1),
                ),
                selectedDisciplines,
                onSelectDisciplines,
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
