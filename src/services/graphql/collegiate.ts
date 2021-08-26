import React from 'react';
import {gql} from '@apollo/react-hooks';
import {graphqlService} from '../../config/client-graphql';
import {MemberCollegiateState} from '../../screens/containers/cadaster/index.type';

class Collegiate {
  createOne = (collegiate: MemberCollegiateState) => {
    graphqlService.query({
      query: gql`
        createOne(
          collegiate: ${collegiate}
        )
      `,
    });
  };
}

export const collegiateService = new Collegiate();
