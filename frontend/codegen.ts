import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema:
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cle0fx6qg2y7x01ui50yb584q/master',
  documents: ['./lib/graphql/*.graphql'],
  generates: {
    './src/types.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true
      },
    },
  },
}

export default config