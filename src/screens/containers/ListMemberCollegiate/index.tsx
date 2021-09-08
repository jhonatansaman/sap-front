import {useQuery} from '@apollo/client';
import React from 'react';
import {GET_COLLEGIATE_PLANS} from '../../../services/graphql/collegiate';
import {MemberCollegiate} from '../../../types/apiResponse';
import ListMemberCollegiate from '../../components/ListMemberCollegiate';
import {GetCollegiateT, PlanStateT} from './index.type';

const ListMemberCollegiateContainer: React.FC = () => {
  const [plans, setPlans] = React.useState<PlanStateT>({
    data: null,
  });
  const {loading, data, refetch} = useQuery<GetCollegiateT>(
    GET_COLLEGIATE_PLANS,
    {},
  );

  React.useEffect(() => {
    refetch();
    setPlans({data: data?.collegiate});
  }, [data]);

  return <ListMemberCollegiate isLoading={loading} data={plans?.data} />;
};

export default ListMemberCollegiateContainer;
