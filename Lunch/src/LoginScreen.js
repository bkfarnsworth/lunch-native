import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StyledText from './StyledText';


const LoginScreen = (props) => {

   //props.onSignUpPress


   return (
    <View style={styles.container}>
      <TouchableOpacity style={{backgroundColor: 'black'}} onPress={props.onLoginPress}>
        <StyledText style={{color:'#FFFFFF', marginTop: 10, fontFamily: 'Roboto-Bold'}}>Login</StyledText>
      </TouchableOpacity>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
    justifyContent: 'space-around',
    marginTop: 30
  },
});

export default LoginScreen;

