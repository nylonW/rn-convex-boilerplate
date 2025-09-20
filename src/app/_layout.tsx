import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Slot } from "expo-router";
import { HeroUINativeProvider, useTheme } from "heroui-native";
import React from "react";
import { StyleSheet } from "react-native";
import '../../global.css';

import { AppThemeProvider, useAppTheme } from "../contexts/app-theme-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

function ThemedLayout() {
  const { currentTheme } = useAppTheme();


  return (
    <HeroUINativeProvider
      config={{
        colorScheme: "dark",
        theme: currentTheme,
        textProps: {
          allowFontScaling: false,
        },
      }}
    >
      <Slot />
    </HeroUINativeProvider>
  );
}

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <GestureHandlerRootView style={styles.root}>
        <AppThemeProvider>
          <ThemedLayout />
        </AppThemeProvider>
      </GestureHandlerRootView>
    </ConvexProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
