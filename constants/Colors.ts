/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#800F2F';
const tintColorDark = '#A18AFF';

export const Colors = {
  light: {
    text: '#2D2D2D',
    background: '#F7F8FA',
    tint: tintColorLight,
    icon: '#57007F',
    tabIconDefault: '#A0A0A0',
    tabIconSelected: tintColorLight,
    card: '#FFFFFF',
    shadow: '#A18AFF',
  },
  dark: {
    text: '#ECEDEE',
    background: '#18191A',
    tint: tintColorDark,
    icon: '#A18AFF',
    tabIconDefault: '#6C6C6C',
    tabIconSelected: tintColorDark,
    card: '#222326',
    shadow: '#57007F',
  },
};
