export type ColorName =
  | 'paper'
  | 'space'
  | 'glade'
  | 'lemon'
  | 'curry'
  | 'chili'
  | 'ocean'
  | 'river'
  | 'grape'
  | 'coral'
  | 'earth'
  | 'stone';

export type ShadeName = 'blur' | 'calm' | 'core' | 'deep' | 'echo';

export type Swatch = Record<ShadeName, string>;

export type Palette = Record<ColorName, Swatch>;
