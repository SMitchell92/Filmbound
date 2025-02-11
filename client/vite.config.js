import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    /*   envDir: './enviroment', */
    plugins: [react()],
    server: {
        proxy: {
            '/api': { target: 'http://localhost:3001', changeOrigin: true },
            '/auth': { target: 'http://localhost:3001', changeOrigin: true },
        },
    },
});
