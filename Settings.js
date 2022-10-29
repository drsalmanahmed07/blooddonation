import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Map from "react-native-vector-icons/Feather";
import Faq from "react-native-vector-icons/Feather";
import Request from "react-native-vector-icons/FontAwesome5";
import Hist from "react-native-vector-icons/Fontisto";
import Bank from "react-native-vector-icons/MaterialCommunityIcons";
import About from "react-native-vector-icons/Entypo";
import Out from "react-native-vector-icons/Ionicons";


export default function Settings(props) {



    const onPressHandler = () => {
        const { navigate } = props.navigation;
        props.navigation.navigate('Account Settings');
    }

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                {/* <Text>Hello this is a View</Text> */}
            </View>
            <View style={styles.view2}>
                <View style={styles.iconflex}>
                    <Icon style={styles.iconic} name="user" size={32} color="black" />
                    <TouchableOpacity style={styles.buttons}
                        onPress={onPressHandler}
                    >
                        <Text style={styles.btntxtcolor}>Profile Settings</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.iconflex}>
                    <Map style={styles.iconic} name="map-pin" size={32} color="black" />
                    <TouchableOpacity style={styles.buttons}
                    // onPress={onPressHandler}
                    >
                        <Text style={styles.btntxtcolor}>Map Location</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconflex}>
                    <Request style={styles.iconic} name="hand-holding-water" size={32} color="black" />
                    <TouchableOpacity style={styles.buttons}
                    // onPress={onPressHandler}
                    >
                        <Text style={styles.btntxtcolor}>Blood Requests</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconflex}>
                    <Hist style={styles.iconic} name="blood" size={32} color="black" />
                    <TouchableOpacity style={styles.buttons}
                    // onPress={onPressHandler}
                    >
                        <Text style={styles.btntxtcolor}>Donate History</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconflex}>
                    <Bank style={styles.iconic} name="hospital-box-outline" size={32} color="black" />
                    <TouchableOpacity style={styles.buttons}
                    // onPress={onPressHandler}
                    >
                        <Text style={styles.btntxtcolor}>Blood Bank</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconflex}>
                    <About style={styles.iconic} name="tripadvisor" size={32} color="black" />
                    <TouchableOpacity style={styles.buttons}
                    // onPress={onPressHandler}
                    >
                        <Text style={styles.btntxtcolor}>About</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconflex}>
                    <Faq style={styles.iconic} name="check-square" size={32} color="black" />
                    <TouchableOpacity style={styles.buttons}
                    // onPress={onPressHandler}
                    >
                        <Text style={styles.btntxtcolor}>FAQ's</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.iconflex}>
                    <Out style={styles.iconic} name="ios-exit-outline" size={32} color="black" />
                    <TouchableOpacity style={styles.buttons}
                    // onPress={onPressHandler}
                    >
                        <Text style={styles.btntxtcolor}>Log Out</Text>
                    </TouchableOpacity>
                </View>



            </View>
            <View style={styles.view3}>
                {/* <Text>Hello this is a View</Text> */}
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
    buttons: {
        // backgroundColor: 'red',
        width: 170,
        margin: 8,
        height: 40,
        borderRadius: 15,
        // alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    btntxtcolor: {
        color: "red",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    // view1: {
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: 'center'
    // },
    view2: {
        flex: 15,
        alignItems: "center",
        // backgroundColor: 'yellow',
        justifyContent: 'center'
    },
    // view3: {
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: 'center'
    // },
    input: {
        backgroundColor: 'white',
        color: "#555",
        width: 200,
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center',
        borderRadius: 8,
        height: 30,
        borderWidth: 1,
        textAlign: 'center'
    },
    iconflex:
    {

        flexDirection: "row",
        marginRight: 35

    },
    iconic: {
        marginTop: 7,
        marginRight: 12

    },
});

