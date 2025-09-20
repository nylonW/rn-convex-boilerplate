import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "heroui-native";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.foreground,
        headerStyle: {
          backgroundColor: undefined,
        },
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        tabBarLabelStyle: {
          color: colors.foreground,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Lock-in",
          tabBarIcon: () => (
            <TabBarIcon name="lock" color={colors.foreground} />
          ),
        }}
      />
      {/* <Tabs.Screen name="settings" options={{ title: "Settings" }} /> */}
    </Tabs>
  );
}
