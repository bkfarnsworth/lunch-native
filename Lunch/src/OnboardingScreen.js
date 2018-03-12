import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StyledText from './StyledText';


export default OnboardingScreen = (props) => {

   //props.onSignUpPress


   return (
    <View style={styles.container}>
      <Graphic/>
      <Text style={{fontSize: 50, color: 'black'}}>
        <Text style={{color: 'black'}}>.</Text>
        <Text>.</Text>
        <Text>.</Text>
        <Text>.</Text>
      </Text>
      <View>
        <StyledText style={{fontSize: 30, fontFamily: 'Roboto-Light'}}>Welcome to</StyledText>
        <StyledText style={{fontSize: 30, fontFamily: 'Roboto-Light'}}>Lunch</StyledText>
      </View>
      <StyledText style={{fontFamily: 'Roboto-Regular'}}>Take the guesswork out of catching up over a bite to eat</StyledText>
      <TouchableOpacity style={styles.signUpButton} onPress={props.onSignUpPress}>
        <StyledText style={{color:'black', marginTop: 10, fontFamily: 'Roboto-Bold'}}>SIGN UP</StyledText>
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
    justifyContent: 'space-around'
  },
  signUpButton: {
    width: '100%',
    height: 40,
    backgroundColor: 'purple',
    borderRadius: 3,
  }
});

const Graphic = () => {
  const style = {
    backgroundColor: '#C8CDD6',
    height: 100,
    width: 100,
    borderRadius: 3,
  }

  return (
    <View style={style}>
      <Text style={{color: 'white', fontSize: 10, paddingTop: '40%', textAlign: 'center'}}>Some graphic here</Text>
    </View>
  )
}