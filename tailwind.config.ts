import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: [
    './app/**/*/.{vue,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard ',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif',
        ],
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    daisyui,
    typography,
  ],
  daisyui: {
    themes: ['light'],
  },
} as Config;
