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

export const GET_PLANS_BY_QUERY = gql`
  query GetCollegiate($query: String!) {
    getPlanByQuery(query: $query) {
      teacherName
      siape
      department
      disciplineName
    }
  }
`;
