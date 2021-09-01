import React from 'react';
import {graphqlService} from '../../config/client-graphql';
import {gql, useMutation} from '@apollo/client';
import {MemberCollegiateState} from '../../screens/containers/cadaster/index.type';

export const CREATE_ONE_MEMBER_COLLEGIATE = gql`
  mutation createOne($collegiate: CreateCollegiateInput!) {
    createOne(collegiate: $collegiate) {
      disciplineName
    }
  }
`;
