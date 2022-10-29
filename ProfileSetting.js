import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from "react";

export default function ProfileSetting({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../blooddonation/assets/jack.png')}
                />
            </View >
            <View style={styles.view2}>
                <Text style={styles.text}> Edit Profile</Text>
            </View>
            <View style={styles.view3}>
                <View style={styles.dabbay}>
                    <TextInput
                        style={[styles.input, styles.op]}
                        // onChangeText={onChangeNumber}
                        // value={number}

                        placeholder="Change Name"
                        keyboardType="default"
                        onChangeText={(value) => SetPassword(value)}
                        maxLength={8}
                        secureTextEntry
                    />
                </View>
                <View>
                    <TextInput
                        style={[styles.input, styles.op]}
                        // onChangeText={onChangeNumber}
                        // value={number}

                        placeholder="Change Phone Number"
                        keyboardType="default"
                        onChangeText={(value) => SetPassword(value)}
                        maxLength={8}
                        secureTextEntry
                    />
                </View>
                <View>
                    <TextInput
                        style={[styles.input, styles.op]}
                        // onChangeText={onChangeNumber}
                        // value={number}

                        placeholder="Change E mail"
                        keyboardType="default"
                        onChangeText={(value) => SetPassword(value)}
                        maxLength={8}
                        secureTextEntry
                    />
                </View>
                <View>
                    <TextInput
                        style={[styles.input, styles.op]}
                        // onChangeText={onChangeNumber}
                        // value={number}

                        placeholder="Change Password"
                        keyboardType="default"
                        onChangeText={(value) => SetPassword(value)}
                        maxLength={8}
                        secureTextEntry
                    />
                </View>
                <View>
                    <TextInput
                        style={[styles.input, styles.op]}
                        // onChangeText={onChangeNumber}
                        // value={number}

                        placeholder="Confirm Password"
                        keyboardType="default"
                        onChangeText={(value) => SetPassword(value)}
                        maxLength={8}
                        secureTextEntry
                    />
                </View>
                <View style={styles.totay}>
                    <TextInput
                        style={[styles.inpu, styles.op]}
                        // onChangeText={onChangeNumber}
                        // value={number}

                        placeholder="Gender"
                        keyboardType="default"
                        onChangeText={(value) => SetPassword(value)}
                        maxLength={8}
                        secureTextEntry
                    />
                    <TextInput
                        style={[styles.inpu, styles.op]}
                        // onChangeText={onChangeNumber}
                        // value={number}

                        placeholder="Date of Birth"
                        keyboardType="default"
                        onChangeText={(value) => SetPassword(value)}
                        maxLength={8}
                        secureTextEntry
                    />
                </View>
                <View>
                    <TextInput
                        style={[styles.input, styles.op]}
                        // onChangeText={onChangeNumber}
                        // value={number}

                        placeholder="Location"
                        keyboardType="default"
                        onChangeText={(value) => SetPassword(value)}
                        maxLength={8}
                        secureTextEntry
                    />

                    <View style={styles.btn}>
                        <TouchableOpacity style={styles.buttons}>
                            <Text style={styles.btntxtcolor}>Update & Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >



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
    btn: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        backgroundColor: 'red',
        width: 200,
        margin: 8,
        height: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    btntxtcolor: {
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    dabbay: {
        marginTop: 25
    },
    op: {
        marginBottom: 10
    },
    tinyLogo: {
        width: 100,
        height: 100,
        borderRadius: 50
    },

    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15
    },
    view1: {
        flex: 6,
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view2: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view3: {
        flex: 20,
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'flex-start',

        // marginTop:30
    },
    // view4: {
    //     flex: 3,
    //     // backgroundColor: 'blue',
    //     alignItems: 'center',
    //     justifyContent: 'flex-start'
    // },
    input: {
        backgroundColor: 'white',
        color: "#555",
        width: 350,
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 10,
        justifyContent: 'center',
        borderRadius: 8,
        height: 35,
        borderWidth: 1,
        padding: 8
        // textAlign: 'center'
    },
    totay: {
        // flex:0.1,
        flexDirection: 'row'
    },
    inpu: {
        backgroundColor: 'white',
        color: "#555",
        width: 170,
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 10,
        justifyContent: 'center',
        borderRadius: 8,
        height: 35,
        borderWidth: 1,
        padding: 8
        // textAlign: 'center'
    },
});

