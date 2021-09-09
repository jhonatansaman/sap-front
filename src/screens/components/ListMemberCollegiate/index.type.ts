import {MemberCollegiate} from '../../../types/apiResponse';
import {PlanStateT} from '../../containers/ListMemberCollegiate/index.type';

export interface ListCollegiateMemberProps extends PlanStateT {
  data: any;
  isLoading: boolean;
  onHandleSearchPlan: (param: string) => void;
  currentPage: number;
  onChangeCurrentPage: (param: number) => void;
}
