import React from 'react';
import {useLazyQuery, useQuery} from '@apollo/client';
import {
  GET_COLLEGIATE_PLANS,
  GET_PLANS_BY_QUERY,
} from '../../../services/graphql/collegiate';
import ListMemberCollegiate from '../../components/ListMemberCollegiate';
import {GetCollegiateT, PlanStateT} from './index.type';
import {alertService} from '../../../services/alert';
import {collegiateService} from '../../../services/collegiate';

const deleteCollegiate = async (
  id: string,
  setPlans: (param: PlanStateT) => void,
) => {
  try {
    const {data} = await collegiateService.deleteCollegiate(id);
    setPlans({data});
    alertService.success('Deletado com sucesso');
  } catch (err) {}
};

const ListMemberCollegiateContainer: React.FC = () => {
  const [plans, setPlans] = React.useState<PlanStateT>({
    data: [],
  });
  const {loading, data, refetch} = useQuery<GetCollegiateT>(
    GET_COLLEGIATE_PLANS,
    {},
  );
  const [executeSearch, get] = useLazyQuery(GET_PLANS_BY_QUERY);
  const [search, setSearch] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  React.useEffect(() => {
    if (search !== '') {
      get.refetch;
      executeSearch({variables: {query: search}});
      setPlans({data: get?.data?.getPlanByQuery});
    } else {
      refetch();
      setPlans({data: data?.collegiate});
    }
  }, [search]);

  React.useEffect(() => {
    refetch();
    setPlans({data: data?.collegiate});
  }, [data]);

  return (
    <ListMemberCollegiate
      isLoading={loading}
      data={plans?.data}
      currentPage={currentPage}
      onChangeCurrentPage={(param: number) => setCurrentPage(param)}
      onHandleSearchPlan={(param: string) => setSearch(param)}
      onClickToRemove={(param: string) => deleteCollegiate(param, setPlans)}
    />
  );
};

export default ListMemberCollegiateContainer;
