import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  /** OG·canonical용 공개 도메인 (Netlify 등 환경변수 VITE_SITE_URL로 www/서브도메인 통일) */
  const siteUrl = (env.VITE_SITE_URL || 'https://ruinoa.com').replace(/\/$/, '');

  return {
    plugins: [
      react(),
      {
        name: 'html-site-url',
        transformIndexHtml(html: string) {
          return html.replaceAll('__SITE_URL__', siteUrl);
        },
      },
    ],
  };
});
