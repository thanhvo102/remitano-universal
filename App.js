import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./pages";
import Details from "./pages/details";
import Settings from "./pages/settings";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const withTabs = (Component) => {
  return () => (
    <Tab.Navigator>
      <Tab.Screen name={Component.name} component={Component} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const App = () => {
  const linking = {
    config: {
      screens: {
        Home: "",
        Details: "details",
        Settings: "settings",
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={withTabs(Home)} />
        <Drawer.Screen name="Details" component={withTabs(Details)} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
