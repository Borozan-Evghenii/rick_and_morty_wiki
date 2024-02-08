import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@UI': path.resolve(__dirname, 'src/utils/UI'),
      '@UI/icon': path.resolve(__dirname, 'src/utils/UI/icon'),
      '@animation': path.resolve(__dirname, 'src/utils/animationComponent'),
      '@components': path.resolve(__dirname, 'src/utils/components'),
      '@gql': path.resolve(__dirname, 'src/utils/graphql/client'),
      '@helpers': path.resolve(__dirname, 'src/utils/helpers'),
      '@hooks': path.resolve(__dirname, 'src/utils/hooks'),
      '@layouts': path.resolve(__dirname, 'src/utils/components/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@sections': path.resolve(__dirname, 'src/pages/homepage/sections')
    }
  }
});
