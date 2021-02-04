import React from "react";
import { Header } from "react-native-elements";

const NativeHeader = ({ navigation }) => {
  return (
    <Header
      leftComponent={{
        icon: "menu",
        color: "#FFF",
        onPress: () => navigation.toggleDrawer(),
      }}
      centerComponent={{ text: "Remitano", style: { color: "#FFF" } }}
      rightComponent={{ icon: "home", color: "#FFF" }}
      containerStyle={{
        backgroundColor: "#41225D",
      }}
    />
  );
};

export default NativeHeader;
