import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

const ApolloAppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    // @ts-expect-error some error wtf
    uri: `${import.meta.env.VITE_API_URL}graphql`
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloAppProvider;
