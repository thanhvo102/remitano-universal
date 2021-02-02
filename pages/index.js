// @generated: @expo/next-adapter@2.1.59
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "@react-navigation/native";
import RootLink from "./shared/root-link";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home page</Text>
      <RootLink to="/details">
        Go to Details
      </RootLink>
    </View>
  );
};

export default Home;
