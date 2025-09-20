import React from 'react';
import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1">
        <Text className="text-secondary-200">This screen doesn&apos;t exist.</Text>
        <Link href="/" style={{ marginTop: 10 }}>
          <Text className="text-primary-500">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
