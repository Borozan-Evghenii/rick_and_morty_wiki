import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  config: {
    avoidOptionals: true,
    immutableTypes: true,
    maybeValue: 'T'
  },
  documents: ['./src/utils/graphql/documents/**/*.gql'],
  generates: {
    './src/utils/graphql/__generated__.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request']
    }
  },
  hooks: {
    afterOneFileWrite: ['prettier --write']
  },
  overwrite: true,
  schema: 'https://rickandmortyapi.com/graphql'
};

export default config;
