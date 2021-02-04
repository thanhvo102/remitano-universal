// @generated: @expo/next-adapter@2.1.59
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import RootLink from "./shared/root-link";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#41225D",
    height: 50,
    paddingHorizontal: 20,
  },
  logo: {
    textTransform: "uppercase",
    color: "#FFF",
    fontSize: 24,
  },
  menu: {
    color: "#FFF",
  }
});

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          Remitano
        </Text>
        <View style={styles.menu}>
          <RootLink to="/details">
            Go to Details
          </RootLink>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
