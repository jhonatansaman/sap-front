import {MemberCollegiate} from '../../../types/apiResponse';

export interface PlanStateT {
  data: Array<MemberCollegiate> | undefined;
}

export interface GetCollegiateT {
  collegiate: Array<MemberCollegiate>;
}
