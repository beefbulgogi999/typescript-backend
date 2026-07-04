// @ts-check

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

// https://eslint.org/docs/latest/use/getting-started
export default defineConfig({
  files: ['**/*.{js,ts}'],
  ignores: ['dist/*.{js,ts}'],
  extends: [js.configs.recommended, tseslint.configs.recommended],
});