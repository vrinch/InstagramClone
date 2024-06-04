import { useEffect } from 'react';
import 'react-native-reanimated';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { useColorScheme } from '@/hooks/useColorScheme';
import SpaceMono from '@/assets/fonts/SpaceMono-Regular.ttf';
import CircularStdBlackItalic from '@/assets/fonts/CircularStd-BlackItalic.ttf';
import CircularStdBoldItalic from '@/assets/fonts/CircularStd-BoldItalic.ttf';
import CircularStdMediumItalic from '@/assets/fonts/CircularStd-MediumItalic.ttf';
import CircularStdRegularItalic from '@/assets/fonts/CircularStd-RegularItalic.ttf';
import CircularStdBlack from '@/assets/fonts/CircularStd-Black.ttf';
import CircularStdBold from '@/assets/fonts/CircularStd-Bold.ttf';
import CircularStdMedium from '@/assets/fonts/CircularStd-Medium.ttf';
import CircularStdRegular from '@/assets/fonts/CircularStd-Regular.ttf';
import BoingBold from '@/assets/fonts/Boing-Bold.ttf';
import BoingSemiBold from '@/assets/fonts/Boing-SemiBold.ttf';
import BoingMedium from '@/assets/fonts/Boing-Medium.ttf';
import BoingRegular from '@/assets/fonts/Boing-Regular.ttf';
import BoingLight from '@/assets/fonts/Boing-Light.ttf';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono,
    CircularStdBlack,
    CircularStdBlackItalic,
    CircularStdBold,
    CircularStdBoldItalic,
    CircularStdMedium,
    CircularStdMediumItalic,
    CircularStdRegular,
    CircularStdRegularItalic,
    BoingBold,
    BoingSemiBold,
    BoingMedium,
    BoingRegular,
    BoingLight,
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{ headerShown: false }}
        />
        <Stack.Screen name='+not-found' />
      </Stack>
    </ThemeProvider>
  );
}
