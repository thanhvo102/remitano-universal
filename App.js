import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./pages";
import Details from "./pages/details";

const Tab = createBottomTabNavigator();

const App = () => {
  const linking = {
    config: {
      screens: {
        Home: "",
        Details: "details",
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
