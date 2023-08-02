import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [react()],
    base: "/test-spot-react/"
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
