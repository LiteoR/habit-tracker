const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const accentColors = {
  primary: '#534AB7',
  primaryLight: '#7F77DD',
  primaryDark: '#3C3489',
  primaryBg: '#EEEDFE',
  primaryMuted: '#CECBF6',
};
const habitColors = {
  violet: '#EEEDFE',
  green: '#E1F5EE',
  amber: '#FAEEDA',
  coral: '#FAECE7',
  pink: '#FBEAF0',
};
export const Colors = {
  light: {
    ...accentColors,
    text: '#1A1A1A',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    textSecondary: '#6B6B6B',
    textTertiary: '#C0C0C0',
    border: '#E5E5E5',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: accentColors.primary,
    button: '#534AB7',
    textButton: '#FFFFFF',
  },
  dark: {
    ...accentColors,
    text: '#F0F0F0',
    background: '#111111',
    surface: '#1E1E1E',
    textSecondary: '#A0A0A0',
    textTertiary: '#555555',
    border: '#2E2E2E',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: accentColors.primary,
    button: '#534AB7',
    textButton: '#FFFFFF',
  },
};
