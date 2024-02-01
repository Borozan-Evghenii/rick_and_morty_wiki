import { GraphQLClient } from 'graphql-request';

import { getSdk } from './__generated__';

const client = new GraphQLClient(`https://rickandmortyapi.com/graphql`);
export const gql = getSdk(client);
export * from './__generated__';
