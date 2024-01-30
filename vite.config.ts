import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/utils/components'),
      '@layouts': path.resolve(__dirname, 'src/utils/components/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@UI': path.resolve(__dirname, 'src/utils/UI'),
      '@hooks': path.resolve(__dirname, 'src/utils/hooks')
    }
  }
})
