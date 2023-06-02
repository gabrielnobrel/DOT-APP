import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Lojas from "../pages/Lojas";

//Substituir o Stack Navigator por Drawer Navigator
// const AppStack = createNativeStackNavigator();
const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#00171E",
        },

        drawerLabelStyle: {
          fontWeight: "bold",
        },

        drawerActiveTintColor: "#00171E",
        drawerActiveBackgroundColor: "#D9D9D9",
        drawerInactiveBackgroundColor: "#00171E",
        drawerInactiveTintColor: "#00BE6A",

        headerShown: false,

        drawerItemStyle: {
          marginVertical: 5,
        },
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Lojas" component={Lojas} />
      <AppDrawer.Screen name="Perfil" component={Profile} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
