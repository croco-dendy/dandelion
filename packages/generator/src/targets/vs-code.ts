import type { Palette } from '@dendelion/palette';
import type { ColorTheme, ColorThemeKind } from 'vscode';

type VSCodeThemeGenerator = (name: string, palette: Palette) => ColorTheme;
const kind: ColorThemeKind.Dark = 2;

export const generateVSCodeTheme: VSCodeThemeGenerator = (
  name: string,
  palette: Palette,
) => {
  return {
    name,
    kind,
    colors: {
      'editor.background': palette.paper.blur,
      'editor.foreground': palette.space.echo,
      'sideBar.background': palette.paper.calm,
      'activityBar.background': palette.space.deep,
      'tab.activeBackground': palette.paper.deep,
      'tab.inactiveBackground': palette.paper.calm,
      'sideBarSectionHeader.background': palette.paper.deep,
    },
    tokenColors: [
      {
        scope: ['keyword', 'storage.type'],
        settings: {
          foreground: palette.chili.echo,
        },
      },
      {
        scope: ['variable', 'identifier'],
        settings: {
          foreground: palette.grape.core,
        },
      },
      {
        scope: ['string'],
        settings: {
          foreground: palette.glade.echo,
        },
      },
      {
        scope: ['comment'],
        settings: {
          foreground: palette.stone.calm,
          fontStyle: 'italic',
        },
      },
    ],
  };
};
