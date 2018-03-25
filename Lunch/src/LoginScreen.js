import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import StyledText from './StyledText';


// native-base stuff
// import {Button} from 'native-base';
// <Button><Text>Continue</Text></Button>



const LoginScreen = (props) => {

   //props.onSignUpPress


   return (
    <View style={styles.container}>
      <StyledText style={{color:'#2A2E43', fontFamily: 'Roboto-Light', fontSize: 40}}>Sign Up</StyledText>
      <LoginInput placeholder="Enter your name"/>
      <LoginInput placeholder="Enter your email"/>
      <LoginInput placeholder="Create password"/>
      <TextButton text={'Continue'} onPress={props.onLoginPress}/>
      
      <StyledText style={{fontSize: 12, fontFamily: 'Roboto-Light', color: '#454F63'}}>
        Or Sign up Using one of these
      </StyledText>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <AuthBubble/>
        <AuthBubble/>
        <AuthBubble/>
      </View>
      <StyledText style={{fontSize: 12, fontFamily: 'Roboto-Light', color: '#454F63'}}>
        Already have an account
      </StyledText>
      <TextButton text={'Login'} onPress={props.onLoginPress}/>
    </View>
   );
}

const AuthBubble = () => {

  const iconStyle = {
    backgroundColor: 'black',
    borderRadius: 50,
    height: 50,
    width: 50,
  }

  return <View style={iconStyle}></View>
}

const TextButton = (props) => {

  let {
    text = 'hi',
    onPress = () => {}
  } = props;

  const styles = {
    width: '100%',
    borderRadius: 12,
  }

  return (
    <TouchableOpacity style={{backgroundColor: 'black', ...styles}} onPress={onPress}>
      <StyledText style={{color:'#FFFFFF', marginTop: 10, fontFamily: 'Roboto-Bold'}}>
        {text}
      </StyledText>
    </TouchableOpacity>
  )
}

const LoginInput = (props = {}) => {

  let {
    placeholder = 'placeholder'
  } = props;

  const style = {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    width: '100%',
    height: 50
  }

  return <TextInput style={style} onChangeText={(text) => this.setState({text})} value={placeholder} />
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

