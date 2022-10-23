import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from "react";

export default function BloodRequests({navigation})
{

    return(
        <View>
            <Text> Hello I am working on Blood Requests page</Text>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "stretch",
      justifyContent: 'center',
    },
});

