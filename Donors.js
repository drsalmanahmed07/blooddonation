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


    const imageData = [
        {
            key: 1,
            image: require('./assets/jack.png'),
            title: 'Jack Frost',
            number: '0302-2222323',
            locations: 'Lahore',
            bloodgrp: "A +ive"

        },
        {
            key: 2,
            image: require('./assets/sandman.jpg'),
            title: 'Sand Man',
            number: '0302-2222323',
            locations: 'Lahore',
            bloodgrp: "B +ive"
        },
        {
            key: 3,
            image: require('./assets/jinx.jpg'),
            title: 'Violet - Vi',
            number: '0302-2222323',
            locations: 'Lahore',
            bloodgrp: "AB +ive"
        },
        {
            key: 4,
            image: require('./assets/jix.jpg'),
            title: 'Jinx',
            number: '0302-2222323',
            locations: 'Lahore',
            bloodgrp: "B -ive"
        },
        {
            key: 5,
            image: require('./assets/jack.png'),
            title: 'Jack',
            number: '0302-2222323',
            locations: 'Lahore',
            bloodgrp: "AB -ive"
        },
        {
            key: 6,
            image: require('./assets/sandman.jpg'),
            title: 'Sand Man',
            number: '0302-2222323',
            locations: 'Lahore',
            bloodgrp: "O +ive"
        },
        {
            key: 7,
            image: require('./assets/jinx.jpg'),
            title: 'VI',
            number: '0302-2222323',
            locations: 'Lahore',
            bloodgrp: "O -ive"
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
            <View style={styles.picview}>
                <FlatList data={imageData}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => (
                        <View style={styles.imageflex}>
                            {/* <View style={styles.renderitem}> */}
                            <View style={styles.imagebox}>
                                <Image style={styles.image} source={item.image}></Image>
                            </View>


                            <View style={styles.bakra} >
                                <View style={styles.imgtext} >
                                    <Text style={styles.name}>{item.title}</Text>
                                </View>
                                <View style={styles.imgtext} >
                                    <Text>{item.number}</Text>
                                </View>
                                <View style={styles.imgtext} >
                                    <Text>{item.locations}</Text>
                                </View>
                            </View>

                            <View style={styles.imgtexts} >
                                <Text style={styles.blodgrp}>{item.bloodgrp}</Text>
                            </View>
                            {/* </View> */}
                        </View>
                    )}

                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={styles.view3}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.btntxtcolor}>Become a Donor</Text>
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
        justifyContent: 'flex-start',
    },
    buttons: {
        backgroundColor: 'red',
        width: 180,
        margin: 8,
        height: 30,
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
    blodgrp: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15
    },
    bakra: {
        flex: 1,
        flexDirection: 'column',

    },
    imgtext: {
        // backgroundColor: 'red',
        flex: 0.6,
        // alignItems:'center',
        marginLeft: 20,
        justifyContent: 'center'

    },

    imgtexts: {
        backgroundColor: 'white',
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center'

    },
    imagebox: {
        flex: 0.58

    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50

    },
    name: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 18
    },
    imageflex: {
        // backgroundColor: 'black',
        marginTop: 8,
        padding: 2,

        flex: 1,
        flexDirection: 'row',

    },
    view1: {
        backgroundColor: "red",
        flex: 1.2
    },

    view2: {
        // backgroundColor: "green",
        flex: 1
    },
    view3: {
        // backgroundColor: "blue",
        flex: 0.8,
        justifyContent:'center',
        alignItems:'center'
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
        marginRight: 10,
        padding: 8,
        borderRadius: 10
    },
    picview: {
        flex: 10,
        // backgroundColor: 'green'
    },
    opacity: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(52, 52, 52, alpha)'

    }
});

