/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/tests/setup.ts',
    },
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, './src/app'),
            "@common": path.resolve(__dirname, './src/common'),
            "@modules": path.resolve(__dirname, './src/modules'),
            "@assets": path.resolve(__dirname, './src/app/assets'),
            "@context": path.resolve(__dirname, './src/common/context')
        }
    },
})