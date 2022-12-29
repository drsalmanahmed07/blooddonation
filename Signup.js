import { StatusBar } from 'expo-status-bar';
import axios from "axios";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Num from "react-native-vector-icons/Octicons";
import Bgrp from "react-native-vector-icons/MaterialCommunityIcons";
import City from "react-native-vector-icons/FontAwesome5";
import Addr from "react-native-vector-icons/MaterialCommunityIcons";
import Pass from "react-native-vector-icons/MaterialCommunityIcons"

export default function Signup(props) {


  const initalState = {
    name: "",
    num: 0,
    bgrp: "",
    city: "",
    address: "",
    password: ""

  };
  const params = JSON.stringify({

    user : 'fguf'
    
    
    });
    const url = 'http://localhost:3000/users';
  const [submitted, SetSubmitted] = useState(false);
  const [name, SetName] = useState();
  const [num, SetNum] = useState();
  const [us, setUs] = useState();
  const [bgrp, SetBgrp] = useState();
  const [city, SetCity] = useState();
  const [address, SetAddress] = useState();
  const [password, SetPassword] = useState();
  const [state, setState] = useState(initalState);

  const SaveUser = () => {
    console.log(state.name);
    console.log(state.num);
    console.log(state.bgrp);
    console.log(state.city);
    console.log(state.address);
    console.log(state.password);

  }
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const AuthLogin = async () => {

    let params2 = {
      "user":"Muhammad3" ,
      "fname":"Salman",
      "lname":"Ahmed",
      "phone":"030809133",
      "email":"ahmedsalm32n.9373@gmail.com",
      "password":"salman07",
      "address":"HouseNo229",
      "cnic":"3820001",
      "bgrp":"B+"
      }
    console.log(url);
    console.log(params);
    axios({'method' : 'post', 'url' : url, 'data': params2,'headers' : {
      'Access-Control-Allow-Credentials' : true,
     'Access-Control-Allow-Origin': '*',

'Access-Control-Allow-Methods': '*',

'Access-Control-Allow-Headers': '*'
    }
      })
      .then(function(response) {
      
      console.log(response);
      
      })
      
      .catch(function(error) {
      
      console.log(error);
      
      });
      
      };
 



  return (


    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          style={styles.tinyLogo}
          source={require('../blooddonation/assets/bdi.png')}
        />
      </View >
      <View style={styles.view2}>
        <View style={styles.iconflex}>
          <Icon style={styles.iconic} name="user" size={32} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={state.name}
            onChangeText={(value) => handleChangeText(value, "name")}
            keyboardType="default"
            maxLength={25}
          />
        </View>

        <View style={styles.iconflex}>
          <Num style={styles.iconic} name="number" size={32} color="black" />
          <TextInput
            style={styles.input}
            // onChangeText={(value) => setName(value)}

            placeholder="Mobile Number"
            value={state.num}
            onChangeText={(value) => handleChangeText(value, "num")}

            keyboardType="numeric"
            maxLength={11}
          />
        </View>
        <View style={styles.iconflex}>
          <Bgrp style={styles.iconic} name="blood-bag" size={32} color="black" />

          <TextInput
            style={styles.input}
            // onChangeText={(value) => setName(value)}

            placeholder="Blood Group i.e A+"
            value={state.bgrp}
            onChangeText={(value) => handleChangeText(value, "bgrp")}
            keyboardType="default"
            maxLength={2}
          />

        </View>

        <View style={styles.iconflex}>
          <City style={styles.iconic} name="city" size={32} color="black" />
          <TextInput
            style={styles.input}
            // onChangeText={(value) => setName(value)}

            placeholder="City"
            value={state.city}
            onChangeText={(value) => handleChangeText(value, "city")}
            keyboardType="default"
            maxLength={30}
          />
        </View>

        <View style={styles.iconflex}>
          <Addr style={styles.iconic} name="home-city" size={32} color="black" />
          <TextInput
            style={styles.input}
            // onChangeText={(value) => setName(value)}

            placeholder="Address"
            value={state.address}
            onChangeText={(value) => handleChangeText(value, "address")}
            keyboardType="default"
            maxLength={50}
          />
        </View>
        <View style={styles.iconflex}>
          <Pass style={styles.iconic} name="security" size={32} color="black" />
          <TextInput
            style={styles.input}
            // onChangeText={(value) => setName(value)}

            placeholder="Password"
            value={state.password}
            onChangeText={(value) => handleChangeText(value, "password")}
            keyboardType="default"
            maxLength={20}
          />
        </View>
      </View>



      <View style={styles.view3}>
        <TouchableOpacity style={styles.buttons}
          onPress={()=>{
            AuthLogin();
          }}
        // onPress={onPressHandler}
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
  iconflex:
  {

    flexDirection: "row",
    marginRight: 35

  },
  iconic: {
    marginTop: 7

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
});