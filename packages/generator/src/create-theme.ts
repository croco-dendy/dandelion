import type { Palette } from '@dendelion/palette';
import { generateVSCodeTheme } from './targets/vs-code';

export type ThemePreset = 'vs-code';

export interface ThemeOptions {
  name: string;
  preset: ThemePreset;
  palette: Palette;
}

export const createTheme = ({ name, preset, palette }: ThemeOptions) => {
  switch (preset) {
    case 'vs-code':
      return generateVSCodeTheme(name, palette);
    default:
      throw new Error(`Unknown preset: ${preset}`);
  }
};
