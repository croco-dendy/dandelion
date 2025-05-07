#!/usr/bin/env bun

import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { palette } from '@dendelion/palette';
import { createTheme } from './create-theme';

const __dirname = dirname(fileURLToPath(import.meta.url));

const theme = createTheme({
  name: 'Dendelion',
  preset: 'vs-code',
  palette,
});

const outputPath = join(__dirname, '../../../themes', 'dendelion-theme.json');
await writeFile(outputPath, JSON.stringify(theme, null, 2), 'utf-8');

console.log('🌼 Theme written to:', outputPath);
