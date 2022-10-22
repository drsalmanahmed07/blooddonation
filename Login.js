import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Pass from "react-native-vector-icons/MaterialCommunityIcons"
import Signup from './Signup';

// const Stack = createStackNavigator();
// React Screen navigator code end

export default function Login(props) {

  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const [password, SetPassword] = useState(false);
  const onPressHandler = () => {
    const { navigate } = props.navigation;
    if (name.length == 1) {
      SetSubmitted(!submitted);
      props.navigation.navigate('Signup');
    } else {
      // Alert.alert(
      //   'Warning',
      //   'The name must be longer than 3 characters', [
      //   {
      //     text: 'Do not show again',
      //     onPress: () => console.warn('Do not show Pressed!')
      //   },
      //   {
      //     text: 'Cancel',
      //     onPress: () => console.warn('Cancel Pressed!')
      //   },
      //   {
      //     text: 'OK',
      //     onPress: () => console.warn('OK Pressed!')
      //   },
      // ],
      //   {
      //     cancelable: true,
      //     onDismiss: () => console.warn('Alert dismissed!')
      //   })
      ToastAndroid.showWithGravity(
        'The Number must consist of 11 characters',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      )
    }

    if (password.length == 8) {
      SetPassword(!password)
    } else {
      ToastAndroid.showWithGravity(
        'Your password is too short',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      )
    }

    if (name.length == 0 && password.length == 0) {
      ToastAndroid.showWithGravity(
        'Fields can not be empty',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      )
    }

    if (name.length != 0 && password.length == 0) {
      ToastAndroid.showWithGravity(
        'Password is Required',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      )
    }

    if (name.length < 11) {
      ToastAndroid.showWithGravity(
        'Your number must consist of 11 characters',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      )
    }
  }

  return (


    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.iconview}>

        {/* This is a View where only icon is Placed */}
        <Image
          style={styles.tinyLogo}
          source={require('../blooddonation/assets/bdi.png')}
        />
      </View>

      <View style={styles.txtinputview}>
        {/* <Text>2</Text>  This is the View where Only text Input is placed*/}
        <View style ={styles.iconflex}>
        <Icon style = {styles.iconic}name = "user"  size = {35} color = "black" />
          <TextInput
            style={styles.input}
            // onChangeText={(value) => setName(value)}
            placeholder=" Enter Cell No."
            onChangeText={(value) => SetName(value)}
            keyboardType="numeric"
            maxLength={11}
          />
        </View>


        {/* <Text> Your Cell Number is : {name}</Text> */}

        <View style = {styles.iconflex}>
        <Pass style = {styles.iconic}name = "security" size = {32} color = "black"/>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}

          placeholder="Enter Password"
          keyboardType="default"
          onChangeText={(value) => SetPassword(value)}
          maxLength={8}
          secureTextEntry
        />
        </View>
        

        <TouchableOpacity style={styles.opacityforgot}>
          <Text style={styles.txtcolor}>Forgot Password?</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.btnview}>
        {/* This is the View where only buttons are placed */}
        <TouchableOpacity style={styles.buttons} onPress={onPressHandler}>
          <Text style={styles.btntxtcolor}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.btntxtcolor}>Become a Donor</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}




// React Screen Navigator Cdoe

// React Screen Navigator Cdoe

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  iconic:{
    marginTop: 5
   
  },
  iconflex:
  {
    flex:1,
    flexDirection:"row",
    margin:10,
    marginTop:20
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
  iconview: {
    flex: 1.2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtinputview: {
    flex: 1.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:35
  },

  btnview: {
    flex: 1.5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: "center",
  },
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 150
  },
  txtcolor: {
    color: "#ff0000"
  },
  input: {
    backgroundColor: 'white',
    color: "#555",
    width: 200,
    alignItems: 'center',
    marginTop: 5,
    marginLeft:10,
    justifyContent: 'center',
    borderRadius: 8,
    height: 35,
    borderWidth: 1,
    textAlign: 'center'
  },
  opacityforgot: {
    backgroundColor: "white",
    // color:"#ff0000",
    alignItems: "center",
    marginLeft: 200,
    marginTop: 30,
    width: 140,
    height: 30,
    justifyContent: 'center',
    borderRadius: 8,
  }
});
