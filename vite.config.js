import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint2';
import stylelint from 'vite-plugin-stylelint';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    eslint({
      cache: true,
      lintInWorker: true,
      exclude: ['**/node_modules/**', 'dist/**'],
      // fix: true,
    }),
    stylelint({
      fix: true,
      exclude: ['node_modules', 'dist/**'],
      chokidar: true,
      emitErrorAsWarning: true,
      lintInWorker: true,
      lintOnStart: true,
      build: false,
    }),
    legacy(),
    checker({
      enableBuild: false,
      overlay: {
        initialIsOpen: false,
      },
      terminal: false,
      eslint: {
        lintCommand: 'eslint "src/**/*.{js,vue}"',
      },
      stylelint: {
        lintCommand: 'stylelint src/**/*.{css,scss,sass,vue}',
      },
    }),
    visualizer(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/scss/main.scss" as *;`,
      },
    },
  },
}));
