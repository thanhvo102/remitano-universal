import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootHeader from "components/header/index";

const Home = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <RootHeader {...{ navigation }} />
      <Text>Home page</Text>
    </SafeAreaProvider>
  );
};

export default Home;
