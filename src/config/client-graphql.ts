import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const uri =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_LOCAL;

const httpLink = new HttpLink({uri});

export const graphqlService = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
