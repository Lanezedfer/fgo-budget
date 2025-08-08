import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="results/guaranteed"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="results/priority" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
