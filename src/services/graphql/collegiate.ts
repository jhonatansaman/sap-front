import {gql} from '@apollo/client';

export const CREATE_ONE_MEMBER_COLLEGIATE = gql`
  mutation createOne($collegiate: CreateCollegiateInput!) {
    createOne(collegiate: $collegiate) {
      disciplineName
    }
  }
`;

export const GET_COLLEGIATE_PLANS = gql`
  query GetCollegiate {
    collegiate {
      teacherName
      siape
      department
      disciplineName
    }
  }
`;
