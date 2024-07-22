import { defineConfig } from 'vite'
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@board': path.resolve(__dirname, './src/board'),
            '@game': path.resolve(__dirname, './src/game'),
        },
    },
})