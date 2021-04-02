import React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootHeader from "components/header/index";
import RImage from "components/shared/image";
import { useSmScreen } from "hooks/responsive";

const Home = ({ navigation }) => {
  const isSmScreen = useSmScreen();

  return (
    <SafeAreaProvider>
      <RootHeader {...{ navigation }} />
      <View style={{ width: "80%", backgroundColor: isSmScreen ? "red" : "blue" }}>
        <Text>Home page</Text>
        <RImage src="https://s3.remitano.com/uploads/post/cover_image/10313/normal_Artboard_1_copy_4.jpg" />
      </View>
    </SafeAreaProvider>
  );
};

export default Home;
