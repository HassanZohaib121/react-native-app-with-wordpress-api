import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#b09393",
        },
      }}
    >
      <Stack.Screen name="offices" options={{ title: "Our Offices" }} />
    </Stack>
  );
};

export default Layout;
