import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        viteCompression(),
        vue()
    ],
    build: {
        outDir: "../public"
    },
})
