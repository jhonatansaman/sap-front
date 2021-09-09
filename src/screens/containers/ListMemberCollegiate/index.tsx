import {useLazyQuery, useQuery} from '@apollo/client';
import React from 'react';
import {
  GET_COLLEGIATE_PLANS,
  GET_PLANS_BY_QUERY,
} from '../../../services/graphql/collegiate';
import {MemberCollegiate} from '../../../types/apiResponse';
import ListMemberCollegiate from '../../components/ListMemberCollegiate';
import {GetCollegiateT, PlanStateT} from './index.type';

const onSearchCollegiate = (param: string, executeSearch: any) => {
  executeSearch({variables: {query: param}});
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
    />
  );
};

export default ListMemberCollegiateContainer;
