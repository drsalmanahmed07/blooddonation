import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { EvilIcons } from '@expo/vector-icons';
export default function Searchbar({ getWeatherinfo }) {
    const [cityName, setcityName] = useState('');
    useEffect(() => {

        console.log(cityName);

    });
    return (
        <View>
           
                <View style={styles.Searchbar}>
                    <TextInput
                        placeholder='Search Here'
                        value={cityName}
                        onChangeText={(text) => setcityName(text)}
                    />
                    <EvilIcons name="search" size={30} color='black' onPress={() => getWeatherinfo(cityName)} />
                </View>
            </View>

        
    );
}

const styles = StyleSheet.create({
    Searchbar: {

        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth:4,
        borderColor:'red'

    },
    
});
