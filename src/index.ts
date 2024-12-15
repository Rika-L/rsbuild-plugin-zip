import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import archiver from 'archiver';
import dayjs from 'dayjs';

import type { RsbuildPlugin } from '@rsbuild/core';
import type { RsbuildPluginScanOptions } from './type.js';

import gradient from 'gradient-string';

/**
 * Print a string to the console, with a gradient color effect.
 * @param {string} str - The string to print.
 */
export function riPrint(str: string) {
  console.log(gradient(['cyan', 'pink'])(str));
}

const initialOptions = {
  name: 'dist',
  enabled: true,
  env: 'development',
  sourceDir: 'dist',
  outputDir: 'zip',
};

export const RsbuildPluginZip = (
  options?: RsbuildPluginScanOptions,
): RsbuildPlugin => {
  const mergeOptions: Required<RsbuildPluginScanOptions> = {
    ...initialOptions,
    ...options,
  };
  return {
    name: 'Rsbuild-Plugin-Zip',
    setup: (api) => {
      if (!mergeOptions.enabled) return;
      api.onAfterBuild(() => {
        const sourceDir = path.join(process.cwd(), mergeOptions.sourceDir);
        const outputDir = path.join(process.cwd(), mergeOptions.outputDir);
        const fileName = `${mergeOptions.name}-${mergeOptions.env}-${dayjs().format('YYYY-MM-DD-HH-mm-ss')}.zip`;
        const outputFile = path.join(outputDir, fileName);
        if (!fs.existsSync(outputDir)) {
          riPrint(`● Could not find directory "${mergeOptions.outputDir}"`);
          riPrint(`● Generate new directory "${mergeOptions.outputDir}"`);
          fs.mkdirSync(outputDir, { recursive: true });
        }
        const output = fs.createWriteStream(outputFile);
        const archive = archiver('zip', { zlib: { level: 9 } });
        archive.pipe(output);
        archive.directory(sourceDir, false);
        archive.finalize();
        riPrint(`● Finish zip, file: "${fileName}"`);
      });
    },
  };
};
