// React screen navigator Code
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from "./DrawerContent";
import Login from "./Login";
import Signup from "./Signup";
import Donors from "./Donors";
import BloodRequests from "./BloodRequests";
import Requestblood from "./Requestblood";
import Camps from "./Camps";
import Support from "./Support";
import Settings from "./Settings"
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

export default function App(props) {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
      // screenOptions={{
      //   header: () => null
      // }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        // options={{
        //   header: () => null
        // }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />

        <Stack.Screen
          name="Donors"
          component={Donors}
        />

      </Stack.Navigator> */}

      <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />}
      // screenOptions={{
      //   header: () => null
      // }}
      >
        <Drawer.Screen
          name="Login"
          component={Login}
        // options={{
        //   header: () => null
        // }}
        />
        <Drawer.Screen
          name="Signup"
          component={Signup}
        />

        <Drawer.Screen
          name="Donors"
          component={Donors}
        />

        <Drawer.Screen
          name="Request A Blood"
          component={Requestblood}
        />

        <Drawer.Screen
          name="Blood Requests"
          component={BloodRequests}
        />

        <Drawer.Screen
          name="Camps"
          component={Camps}
        />

        <Drawer.Screen
          name="Support"
          component={Support}
        />

        <Drawer.Screen
          name="Settings"
          component={Settings}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}