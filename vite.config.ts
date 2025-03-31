import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: './postcss.config.cjs', // O caminho para o seu arquivo de configuração do PostCSS
  },
  plugins: [react()],
})
