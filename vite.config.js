import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss', 
                'resources/ts/index.tsx'
            ],
            refresh: true,
        }),
        react(),
        checker({
            typescript: true,
          }),
      
    ],
});
