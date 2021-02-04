import React from "react";
import { Text } from "react-native";
import RootHeader from "components/header/index";

const Details = ({ navigation }) => {
  return (
    <>
      <RootHeader {...{ navigation }} />
      <Text>Details page</Text>
    </>
  );
};

export default Details;
