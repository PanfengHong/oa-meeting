import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

const libConfig = (name: string) =>
  defineConfig({
    plugins: [
      react(),
      dts({ rollupTypes: true, tsconfigPath: './tsconfig.build.json' }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@zdy-oa/utils': resolve(__dirname, '../oa-utils/src/index.ts'),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name,
        formats: ['es'],
        fileName: 'index',
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          'react-router',
          'react-router-dom',
        ],
      },
    },
  })

export default libConfig('MyOaMeeting')
