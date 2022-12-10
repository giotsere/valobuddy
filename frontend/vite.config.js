import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// import ...
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // dev server on 8090
    // proxy: {
    //   '/api/': {
    //     target: 'https://valobuddy.onrender.com/',
    //     changeOrigin: true,
    //   },
    // },
  },
  //...
});
