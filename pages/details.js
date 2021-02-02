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

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details page</Text>
      <RootLink to="/">
        Go to Home
      </RootLink>
    </View>
  );
};

export default Details;
