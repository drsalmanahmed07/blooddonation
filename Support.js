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
            title: 'Who can donate blood?',
            description: 'Any healthy individual can donate blood. Before taking blood, some questions related to your health will be asked to make sure that you can donate blood.'
        },
        {
            key: 2,
            title: ' Can I donate blood if I had jaundice previously?',
            description: 'No, if you have a history of jaundice in the past, you need to be screened for hepatitis before donating blood.'
        },
        {
            key: 3,
            title: 'Do I have enough blood in my body to donate?',
            description: ' Yes. The body contains 10 to 12 pints of blood.'
        },
        {
            key: 4,
            title: 'How much blood is taken?',
            description: 'For a whole blood donation, approximately one pint (which weighs about one pound-up to 500 ml) is collected.'
        },
        {
            key: 5,
            title: ' What type of tests are performed on donated blood?',
            description: 'Blood is tested for Hepatitis B & C, and certain other infectious diseases to ensure the donor and the patient’s safety.'
        },
        {
            key: 6,
            title: 'How long will my blood be stored for in the blood bank after collection?',
            description: 'Each unit of whole blood may be separated into several components. However at SKMCH&RC, blood is utilized shortly after collection.'
        },
        {
            key: 7,
            title: 'Will donating blood hurt?',
            description: 'No more than a pinch in the beginning!  Our skilled phlebotomists make donating blood as painless and comfortable as possible.'
        },
        {
            key: 8,
            title: 'Can I develop infections like hepatitis or HIV (AIDS Virus) when I donate blood?',
            description: 'No each blood bag and its needle are sterile and disposable.'
        },


    ];

    const hotTopics = [
        {
            key: 1,
            title: 'Why Give Blood?',
            description: 'Description'
        },
        {
            key: 2,
            title: 'Who Can Give Blood?',
            description: 'Description'
        },
        {
            key: 3,
            title: 'The Donation Process',
            description: 'Description'
        },
        {
            key: 4,
            title: 'Where To Donate?',
            description: 'Description'
        },
        {
            key: 5,
            title: 'How often can I donate?',
            description: 'Description'
        },
        {
            key: 6,
            title: 'Will donating blood hurt?',
            description: 'Description'
        },
        {
            key: 7,
            title: 'What should I eat after donation?',
            description: 'Description'
        },
        {
            key: 8,
            title: ' Can I smoke after donation?',
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
                                <View style={styles.title}>
                                    <View style={styles.sidhu}>
                                        <TouchableOpacity >
                                            <Text style ={styles.textss} >{item.title}</Text>
                                        </TouchableOpacity>
                                    </View>
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
    textss:{
        fontSize:14,
        color:'red',
        fontWeight:'bold',
        marginBottom:10,
        // borderBottomWidth:1,
        // borderColor:'black',


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
        color: 'white',
        backgroundColor: 'red',
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

