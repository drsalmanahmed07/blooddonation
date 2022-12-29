// React screen navigator Code
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from "./DrawerContent";
import Login from "./Login";
import Donors from "./Donors"
import Signup from "./Signup";
import BloodRequests from "./BloodRequests";
import Requestblood from "./Requestblood";
import Camps from "./Camps";
import Support from "./Support";
import Settings from "./Settings"
import ProfileSetting from "./ProfileSetting";
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
          name="Signup"
          component={Signup}
          options={{
          header : ()=> null ,
          backgroundColor : 'red'
          }}
        />

        <Drawer.Screen
          name="Login"
          component={Login}
          // options={{
          //   header: () => null
          // backgroundColor:"red"
          // }}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'red',
            }
          }}
        />


        <Drawer.Screen
          name="Donors"
          component={Donors}

          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'red',
            }
          }}
        />




        {/* <Drawer.Screen
          name="Donors"
          component={Donors}
        /> */}

        <Drawer.Screen
          name="Request A Blood"
          component={Requestblood}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'red',
            }
          }}
        />

        <Drawer.Screen
          name="Blood Requests"
          component={BloodRequests}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'red',
            }
          }}
        />

        <Drawer.Screen
          name="Camps"
          component={Camps}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'red',
            }
          }}

        />

        <Drawer.Screen
          name="Support"
          component={Support}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'red',
            }
          }}
        />

        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'red',
            }
          }}
        />

        <Drawer.Screen
          name="Account Settings"
          component={ProfileSetting}
          // options={{
          //   header: () => null
          // backgroundColor:"red"
          // }}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'red',
            }
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}