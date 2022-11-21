import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from "react";

export default function Camps({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.txt}>
                <Text style={styles.text}> Want a Helping</Text>
                <Text style={styles.text}> Hand</Text>
            </View>
            <View >
                <Image
                    style={styles.tinyLogo}
                    source={require('../blooddonation/assets/cmp.jpg')}
                />
            </View>
            <View style={styles.paraview}>
                <Text style={styles.para}>
                Our human coaches will work with you at your convenience on any financial question. Start chatting to us via SMS for personalized recommendations on how to manage your money better.
                </Text>
            </View>
            <View style={styles.button}>
            <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.btntxtcolor}>Chat Via SMS</Text>
                </TouchableOpacity>

            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "stretch",
        //   justifyContent: 'center',
    },
    paraview:{
        padding:10
    },
    button:{
        alignItems:'center'
    },
    buttons: {
        backgroundColor: 'red',
        width: 180,
        margin: 8,
        height: 40,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    
    },
    btntxtcolor: {
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    para:{
        
        alignItems: 'center',
        justifyContent: 'center',
        // fontWeight:'bold',
        fontSize:18

    },
    text: {
        fontSize: 50,
        fontWeight: "bold"
    },
    tinyLogo:{
        width:400,
        height:300,
        
    },
    txt: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

