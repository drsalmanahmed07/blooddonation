import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from "react";
import Searchbar from './Searchbar';

export default function Donors({ navigation }) {
    const buttonArray = [
        {
            key: 1,
            title: 'A +ive'
        },
        {
            key: 2,
            title: 'A -ive'
        },
        {
            key: 3,
            title: 'B +ive'
        },
        {
            key: 4,
            title: 'B -ive'
        },
        {
            key: 5,
            title: 'O +ive'
        },
        {
            key: 6,
            title: 'O -ive'
        },
        {
            key: 7,
            title: 'AB +ive'
        },
        {
            key: 8,
            title: 'AB -ive'
        },


    ];
    return (
        <View style={styles.container}>

            <View style={styles.view1}>
                <Searchbar />
            </View>
            <View style={styles.view2}>
                <FlatList data={buttonArray}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => (
                        <View style={styles.opacity}>
                            <TouchableOpacity >
                                <Text style={styles.title}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.view3}>
                <Text>Hello this is View 3</Text>
            </View>

        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "stretch",
        justifyContent: 'flex-start',
    },
    view1: {
        backgroundColor: "red",
        flex: 1
    },

    view2: {
        // backgroundColor: "green",
        flex: 5
    },
    view3: {
        backgroundColor: "blue",
        flex: 2
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'red',
        marginTop: 10,
        marginRight:10,
        padding:8,
        borderRadius:10

    
    },
    opacity: {
        flex: 1,
        flexDirection: 'row'

    }
});

