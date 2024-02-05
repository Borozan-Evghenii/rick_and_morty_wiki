import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  config: {
    avoidOptionals: true,
    immutableTypes: true,
    maybeValue: 'T',
    withHooks: true
  },
  documents: ['./src/utils/graphql/documents/**/*.graphql'],
  emitLegacyCommonJSImports: false,
  generates: {
    './src/utils/graphql/__generated__.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    }
  },
  hooks: {
    afterOneFileWrite: ['prettier --write']
  },
  ignoreNoDocuments: true,
  overwrite: true,
  schema: 'https://rickandmortyapi.com/graphql'
};

export default config;
