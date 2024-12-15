import { defineConfig } from '@rsbuild/core';
import { RsbuildPluginZip } from '../src';

export default defineConfig({
  plugins: [
    RsbuildPluginZip({
      env: 'Dev',
    }),
  ],
});
