import {MemberCollegiate} from '../../../types/apiResponse';
import {PlanStateT} from '../../containers/ListMemberCollegiate/index.type';

export interface ListCollegiateMemberProps extends PlanStateT {
  isLoading: boolean;
  onHandleSearchPlan: (param: string) => void;
  currentPage: number;
  onChangeCurrentPage: (param: number) => void;
}
