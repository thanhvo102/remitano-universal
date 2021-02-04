// @generated: @expo/next-adapter@2.1.59
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import RootLink from "components/shared/root-link";

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
    paddingHorizontal: 10,
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

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome.Button
          name="bars"
          backgroundColor="#41225D"
          onPress={() => navigation.toggleDrawer()}
        />
        <Text style={styles.logo}>
          Remitano
        </Text>
        <FontAwesome.Button
          name="bell"
          backgroundColor="#41225D"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
