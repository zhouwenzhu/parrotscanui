import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { lingui } from '@lingui/vite-plugin'
import path from 'node:path'

export default defineConfig({
  plugins: [
    react({
      // 允许在 .js 文件中也使用 JSX（兼容旧组件
      babel: {
        babelrc: false,
        configFile: false,
      },
    }),
    lingui(),
  ],
  // 让 Vite/Rollup 也把 .js 当成 JSX 解析
  esbuild: {
    loader: 'tsx',
    include: [
      /src\/.*\.[jt]sx?$/,
    ],
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'build',
    sourcemap: false,
  },
})
