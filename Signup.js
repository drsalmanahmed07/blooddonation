import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from "react";

export default function Signup({ navigation }) {

  const [submitted, SetSubmitted] = useState(false);
  const [name, SetName] = useState('');
  const [num, SetNum] = useState('');
  const [bgrp, SetBgrp] = useState('');
  const [city, SetCity] = useState('');
  const [address, SetAddress] = useState('');
  const [password, SetPassword] = useState('');

  const onPressHandler = () => {

    if(name.length ==0)
  {
    ToastAndroid.showWithGravity(
      'The Name field is required',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    )
  }

  if (password.length == 0)
  {
    ToastAndroid.showWithGravity(
      'The Password is required',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    )
    
  }

  // if(password.length !=0 && password.length <=7)
  // {
  //   ToastAndroid.showWithGravity(
  //     'The Password must consist of atleast 8  characters',
  //     ToastAndroid.LONG,
  //     ToastAndroid.BOTTOM,
  //   )
  // }

  if(num.length==0)
  {
    ToastAndroid.showWithGravity(
      'The Number is required',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    )
  }

  // if(num.length!=0 && num.length <=10)
  // {
  //   ToastAndroid.showWithGravity(
  //     'The NUmber Must consist of 11 characters',
  //     ToastAndroid.LONG,
  //     ToastAndroid.BOTTOM,
  //   )
  // }
  

  if(bgrp.length == 0)
  {
    ToastAndroid.showWithGravity(
      'The Blood Group field is required',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    )
  }
  // if(bgrp.length !=0 && bgrp.length<=1)
  // {
  //   ToastAndroid.showWithGravity(
  //     'The Blood Group must be written in this format i.e A+',
  //     ToastAndroid.LONG,
  //     ToastAndroid.BOTTOM,
  //   )
  // }

  if(city.length == 0)
  {
    ToastAndroid.showWithGravity(
      'The City field is required',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    )
  }

  if(address.length == 0)
  {
    ToastAndroid.showWithGravity(
      'The address is required',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    )
  }

  }

  
  return (


    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          style={styles.tinyLogo}
          source={require('../blooddonation/assets/bdi.png')}
        />
      </View >
      <View style={styles.view2}>
        <TextInput
          style={styles.input}
          // onChangeText={(value) => setName(value)}

          placeholder="Full Name"
          onChangeText={(value) => SetName(value)}
          keyboardType="default"
          maxLength={25}
        />

        <TextInput
          style={styles.input}
          // onChangeText={(value) => setName(value)}

          placeholder="Mobile Number"
          onChangeText={(value) => SetNum(value)}
          keyboardType="numeric"
          maxLength={11}
        />

        <TextInput
          style={styles.input}
          // onChangeText={(value) => setName(value)}

          placeholder="Blood Group i.e A+"
          onChangeText={(value) => SetBgrp(value)}
          keyboardType="default"
          maxLength={2}
        />

        <TextInput
          style={styles.input}
          // onChangeText={(value) => setName(value)}

          placeholder="City"
          onChangeText={(value) => SetCity(value)}
          keyboardType="default"
          maxLength={30}
        />

        <TextInput
          style={styles.input}
          // onChangeText={(value) => setName(value)}

          placeholder="Address"
          onChangeText={(value) => SetAddress(value)}
          keyboardType="default"
          maxLength={50}
        />

        <TextInput
          style={styles.input}
          // onChangeText={(value) => setName(value)}

          placeholder="Password"
          onChangeText={(value) => SetPassword(value)}
          keyboardType="default"
          maxLength={20}
        />
      </View>



      <View style={styles.view3}>
        <TouchableOpacity style={styles.buttons}
        onPress={onPressHandler}
        >
          <Text style={styles.btntxtcolor}>Register</Text>
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
  view1: {
    flex: 1,
    // backgroundColor:"blue",
    alignItems: "center",
    justifyContent: "center"

  },
  view2: {
    flex: 1.5,
    // backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  view3: {
    flex: 0.5,
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"

  },
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 150
  },
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
  buttons:{
    backgroundColor:'red',
    width:200,
    margin:8,
    height:50,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10
  },
  btntxtcolor:{
    color:"white",
    alignItems:"center",
    justifyContent:"center",
    fontSize:20,
    fontWeight:"bold"
  },
});