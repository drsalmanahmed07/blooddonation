import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from "react";
import Searchbar from './Searchbar';

export default function Support({ navigation }) {

    const buttonArray = [
        {
            key: 1,
            title: 'Question 1:',
            description: 'Description'
        },
        {
            key: 2,
            title: 'Question 2:',
            description: 'Description'
        },
        {
            key: 3,
            title: 'Question 3:',
            description: 'Description'
        },
        {
            key: 4,
            title: 'Question 4:',
            description: 'Description'
        },
        {
            key: 5,
            title: 'Question 5:',
            description: 'Description'
        },
        {
            key: 6,
            title: 'Question 6:',
            description: 'Description'
        },
        {
            key: 7,
            title: 'Question 7:',
            description: 'Description'
        },
        {
            key: 8,
            title: 'Question 8:',
            description: 'Description'
        },


    ];

    const hotTopics = [
        {
            key: 1,
            title: 'Question 1:',
            description: 'Description'
        },
        {
            key: 2,
            title: 'Question 2:',
            description: 'Description'
        },
        {
            key: 3,
            title: 'Question 3:',
            description: 'Description'
        },
        {
            key: 4,
            title: 'Question 4:',
            description: 'Description'
        },
        {
            key: 5,
            title: 'Question 5:',
            description: 'Description'
        },
        {
            key: 6,
            title: 'Question 6:',
            description: 'Description'
        },
        {
            key: 7,
            title: 'Question 7:',
            description: 'Description'
        },
        {
            key: 8,
            title: 'Question 8:',
            description: 'Description'
        },


    ];


    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <View>
                    <Text style={styles.Qview}>Have a Burning Question?</Text>
                </View>
                <Searchbar />

            </View >
            <View style={styles.view2}>
                <View style={styles.FQA}>
                    <View>
                        <Text style={styles.fQ}>Frequently Asked</Text>
                    </View>
                    <View>
                        <Text style={styles.fQa}>View All</Text>
                    </View>
                </View>

                <View>
                    <FlatList data={buttonArray}
                        keyExtractor={item => item.key}
                        renderItem={({ item }) => (
                            <View style={styles.opacity}>
                                <View style={styles.headingbox}>
                                    <TouchableOpacity >
                                        <Text style={styles.title}>{item.title}</Text>
                                    </TouchableOpacity>
                                    <View>
                                        <Text>{item.description}</Text>
                                    </View>
                                </View>

                            </View>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            <View style={styles.view3}>
                <View style={styles.FQA}>
                    <View>
                        <Text style={styles.fQ}>Topics</Text>
                    </View>
                    <View>
                        <Text style={styles.fQa}>View All</Text>
                    </View>
                </View>

                <FlatList data={hotTopics}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => (
                        <View style={styles.opacitys}>
                            <View>
                                <TouchableOpacity >
                                    <Text style={styles.topics}>{item.title}</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    )}
                    vertical
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={styles.view4}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.btntxtcolor}>Start Conversation</Text>
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
    buttons: {
        backgroundColor: 'red',
        width: 200,
        margin: 8,
        height: 40,
        borderRadius: 12,
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
    opacity: {
        marginTop: 8,
        padding: 2,

        flex: 1,
        flexDirection: 'column',

    },
    opacitys: {
        marginTop: 8,
        padding: 2,

        flex: 1,
        flexDirection: 'row',

    },
    title: {
        fontSize: 20,
        color: 'black',
        // backgroundColor: 'red',
        marginTop: 15,
        marginRight: 10,
        padding: 8,
        width: 200,
        height: 200,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'red'
    },
    topics: {
        fontSize: 20,
        color: 'black',
        // backgroundColor: 'red',
        marginTop: 15,
        marginRight: 10,
        padding: 8,
        width: 380,
        height: 50,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'red'
    },
    fQ: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 18
    },
    fQa: {
        marginTop: 15,
        marginRight: 5,
        fontWeight: "bold",
        fontSize: 14,
        color: 'blue'
    },
    FQA: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor:'red',
        // color:'white'
    },
    Qview: {
        marginTop: 10,
        marginBottom: 10,
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    },
    view1: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'yellow',
        flex: 1,
    },
    view2: {
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',
        flex: 2.5
    },
    view3: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'yellow',
        flex: 1.8
    },
    view4: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 0.5
    },
});

