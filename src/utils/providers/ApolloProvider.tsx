import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

const ApolloAppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: `https://rickandmortyapi.com/graphql`
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloAppProvider;
