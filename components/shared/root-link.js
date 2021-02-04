import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useLinkProps } from "@react-navigation/native";
import NextLink from "next/link";

const RootLink = ({ to, action, children, ...rest }) => {
  const { onPress, ...props } = useLinkProps({ to, action });

  if (Platform.OS === "web") {
    return (
      <NextLink href={to} {...rest}>
        <Text accessibilityRole="link" {...rest}>
          {children}
        </Text>
      </NextLink>
    );
  }

  return (
    <TouchableOpacity {...{ onPress, ...props, ...rest }}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default RootLink;
