import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from "react";

export default function Requestblood({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../blooddonation/assets/req.jpg')}
                />
            </View>

            <View style={styles.view2}>
                <Text style = {styles.heading}> Blood Group:</Text>
                
            </View>

            <View style={styles.view3}>
                <Text> This is View 1</Text>
            </View>
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
    view1: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'

    },

    view2: {
        flex: 1,
        backgroundColor: 'yellow',
        // alignItems: 'center',
        // justifyContent: 'center'

    },

    view3: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'

    },
    tinyLogo: {
        width: 150,
        height: 150,
        borderRadius: 150
      },
      heading:{
        fontSize:18,
        fontWeight:'800',
        marginLeft: 25,
        
      },
});

