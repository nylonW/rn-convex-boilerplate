import { Button, useTheme } from "heroui-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { theme, setTheme } = useTheme();
  setTheme("dark");

  return (
    <SafeAreaView>
      <Text className="text-2xl font-bold text-white">Home</Text>
      <Button
        variant="primary"
        onPress={() => {
          console.log("Pressed!");
        }}
      >
        Click me
      </Button>
    </SafeAreaView>
  );
}
