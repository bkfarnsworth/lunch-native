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
      <StyledText style={{color:'black', fontFamily: 'Roboto-Light'}}>Login</StyledText>
      <LoginInput/>
      <LoginInput/>
      <LoginInput/>
      <TextButton text={'Continue'}/>
      
      <StyledText style={{fontSize: 30, fontFamily: 'Roboto-Light'}}>
        Or Sign up Using one of these
      </StyledText>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <AuthBubble/>
        <AuthBubble/>
        <AuthBubble/>
      </View>
      <StyledText style={{fontSize: 30, fontFamily: 'Roboto-Light'}}>
        Already have an account
      </StyledText>
      <TextButton text={'Login'}/>
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
    text = 'hi'
  } = props;


  return (
    <TouchableOpacity style={{backgroundColor: 'black'}} onPress={() => {}}>
      <StyledText style={{color:'#FFFFFF', marginTop: 10, fontFamily: 'Roboto-Bold'}}>
        {props.text}
      </StyledText>
    </TouchableOpacity>
  )
}

const LoginInput = () => {
  const style = {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    width: 100,
    height: 50
  }

  return <TextInput style={style} onChangeText={(text) => this.setState({text})} value={'this.state.text'} />
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

