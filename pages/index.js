import React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootHeader from "components/header/index";
import { useSmScreen } from "hooks/responsive";

const Home = ({ navigation }) => {
  const isSmScreen = useSmScreen();

  return (
    <SafeAreaProvider>
      <RootHeader {...{ navigation }} />
      <View style={{ backgroundColor: isSmScreen ? "red" : "blue" }}>
        <Text>Home page</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default Home;
