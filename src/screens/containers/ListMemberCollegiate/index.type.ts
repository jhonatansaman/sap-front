import {MemberCollegiate} from '../../../types/apiResponse';

export interface PlanStateT {
  data: Array<MemberCollegiate> | null | undefined;
}

export interface GetCollegiateT {
  collegiate: Array<MemberCollegiate> | null | undefined;
}
