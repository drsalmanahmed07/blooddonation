// React screen navigator Code
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'; //Drawer Navigator
import Login from "./Login";
import Signup from "./Signup";
import Donors from "./Donors";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator() //Drawer navigator

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

      <Drawer.Navigator
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

      </Drawer.Navigator>
    </NavigationContainer>
  )
}