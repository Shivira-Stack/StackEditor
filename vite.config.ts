import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib';

  return {
    plugins: [
      react(),
      isLib && dts({
        insertTypesEntry: true,
        include: ['src']
      })
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    build: isLib ? {
      lib: {
        entry: {
          'stack-editor': resolve(__dirname, 'src/index.ts'),
          'react': resolve(__dirname, 'src/react/index.ts')
        },
        name: 'StackEditor',
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => {
          if (format === 'es') return `${entryName}.js`;
          return `${entryName}.cjs`;
        }
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      }
    } : {
      outDir: 'dist-demo'
    }
  };
});
