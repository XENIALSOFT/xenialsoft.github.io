import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './app/**/*/.{vue,ts}',
  ],
  plugins: [
    daisyui
  ],
} as Config;