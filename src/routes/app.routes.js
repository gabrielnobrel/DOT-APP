import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import New from "../pages/New";

//Substituir o Stack Navigator por Drawer Navigator
// const AppStack = createNativeStackNavigator();
const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#131313",
        },

        drawerLabelStyle: {
          fontWeight: "bold",
        },

        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#00b94a",
        drawerInactiveBackgroundColor: "#000",
        drawerInactiveTintColor: "#ddd",

        headerShown: false,

        drawerItemStyle: {
          marginVertical: 5,
        },
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Registrar" component={New} />
      <AppDrawer.Screen name="Perfil" component={Profile} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
