import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootLink from "components/shared/root-link";

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

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings page</Text>
      <RootLink to="/">
        Go to Home
      </RootLink>
    </View>
  );
};

export default Settings;
