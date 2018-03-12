import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StyledText from './StyledText';


const LoginScreen = (props) => {

   //props.onSignUpPress


   return (
    <View style={{}}>
      <TouchableOpacity style={{backgroundColor: 'black'}} onPress={props.onLoginPress}>
        <StyledText style={{color:'#FFFFFF', marginTop: 10, fontFamily: 'Roboto-Bold'}}>Login</StyledText>
      </TouchableOpacity>
    </View>
   );
}

export default LoginScreen;