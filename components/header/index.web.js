import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import RootLink from "components/shared/root-link";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#41225D",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  logo: {
    color: "#FFF",
    fontSize: 32,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuItem: {
    color: "#FFF",
    paddingHorizontal: 16,
  },
});

const WebHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.logo}>REMITANO</Text>
      </View>
      <View style={styles.menu}>
        <RootLink to="/" style={styles.menuItem}>
          Home
        </RootLink>
        <RootLink to="details" style={styles.menuItem}>
          Details
        </RootLink>
      </View>
    </View>
  );
};

export default WebHeader;
