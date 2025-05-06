import { palette } from '../swatches/watercolor';
import type { ColorName, ShadeName } from '../types';

export const getColor = (color: ColorName, shade: ShadeName) =>
  palette[color][shade];
