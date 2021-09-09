import React from 'react';
import MainCard from '../../../assets/components/card';
import Header from '../../../assets/components/header';
import LoadingModal from '../../../assets/components/modal';
import TableComponent from '../../../assets/components/table';
import {TableRow, TD} from '../../../assets/components/table/styles';
import {MemberCollegiate} from '../../../types/apiResponse';
import {MainContent} from '../cadaster/styles';
import {ListCollegiateMemberProps} from './index.type';
import {Container} from './styles';

const SIZE_TD = 100;

const renderPlans = (plans: Array<MemberCollegiate> | null | undefined) =>
  plans?.map(plan => (
    <React.Fragment>
      <TableRow>
        <TD width={SIZE_TD}>{plan.teacherName}</TD>
        <TD width={SIZE_TD}>{plan.siape}</TD>
        <TD width={SIZE_TD}>{plan.department}</TD>
        <TD width={SIZE_TD}>{plan.disciplineName}</TD>
      </TableRow>
    </React.Fragment>
  ));

const ListMemberCollegiate: React.FC<ListCollegiateMemberProps> = ({
  data,
  isLoading,
  onHandleSearchPlan,
}) => (
  <Container>
    <Header onChange={onHandleSearchPlan} />
    <MainContent>
      <MainCard>
        <TableComponent
          tableHeaders={['Professor', 'Siape', 'Departamento', 'Disciplina']}
          renderRows={renderPlans(data)}
        />
      </MainCard>
    </MainContent>
    {isLoading && <LoadingModal />}
  </Container>
);

export default ListMemberCollegiate;
