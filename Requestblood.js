import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from "react";
// import { Picker } from 'react-native-picker/picker';

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
                <Text style={styles.heading}> Blood Group:</Text>
                {/* <Picker style = {styles.picker}>
                <Picker.Item label = "A +ive" value = "A Positive"/>
                </Picker>
                 */}
                <TextInput
                    style={styles.input}
                    // onChangeText={(value) => setName(value)}
                    placeholder=" Enter Blood Group i.e  B +ive"
                    onChangeText={(value) => SetName(value)}
                    keyboardType="numeric"
                    maxLength={11}
                />

                <Text style={styles.heading}> Address:</Text>
                {/* <Picker style = {styles.picker}>
                <Picker.Item label = "A +ive" value = "A Positive"/>
                </Picker>
                 */}
                <TextInput
                    style={styles.input}
                    // onChangeText={(value) => setName(value)}
                    placeholder=" Your Address Here"
                    // onChangeText={(value) => SetName(value)}
                    keyboardType="default"
                    maxLength={5}
                />
                <Text style={styles.heading}>Description * :</Text>
                {/* <Picker style = {styles.picker}>
                <Picker.Item label = "A +ive" value = "A Positive"/>
                </Picker>
                 */}
                <TextInput
                    style={styles.input}
                    // onChangeText={(value) => setName(value)}
                    placeholder="Description (Optional)"
                    onChangeText={(value) => SetName(value)}
                    keyboardType="numeric"
                    maxLength={11}
                />
            </View>

            <View style={styles.view3}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.btntxtcolor}>Post Request</Text>
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
        justifyContent: 'center',
    },
    btntxtcolor: {
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    buttons: {
        backgroundColor: 'red',
        width: 200,
        margin: 8,
        marginTop:25,
        height: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    input: {
        backgroundColor: 'white',
        color: "#555",
        width: 200,
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 80,
        justifyContent: 'center',
        borderRadius: 8,
        borderColor: 'red',
        height: 30,
        borderWidth: 1,
        textAlign: 'center'
    },
    picker: {
        width: 300,
        height: 45,
        borderColor: 'red',
        borderWidth: 5
    },
    view1: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'

    },

    view2: {
        flex: 1.5,
        // backgroundColor: 'yellow',
        // alignItems: 'center',
        // justifyContent: 'center'

    },

    view3: {
        flex: 1,
        // backgroundColor: 'green',
        alignItems: 'center',
        // justifyContent: 'center',
      

    },
    tinyLogo: {
        width: 150,
        height: 150,
        borderRadius: 150
    },
    heading: {
        fontSize: 18,
        fontWeight: '800',
        marginLeft: 25,
        marginTop: 10

    },
});

