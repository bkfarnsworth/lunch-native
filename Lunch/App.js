import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const BLUE_1 = '#2799fb';//main darker font color
const BLUE_2 = '#bce0fd';//light dot color
const BLUE_3 = '#f1f9ff';//light background color
const WHITE_1 = '#fff';


export default class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {loggedIn: false};
  }

  onSignUpPress() {
    this.setState({loggedIn: true});
  }

  render() {

    if(this.state.loggedIn) {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: BLUE_1}}>Logged In</Text>
          <TouchableOpacity onPress={() => this.setState({loggedIn: false})}><Text>Back</Text></TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.partialBackground}></View>
        <View>
          <StyledText style={{fontSize: 30}}>Welcome to</StyledText>
          <StyledText style={{fontSize: 30}}>Lunch</StyledText>
        </View>
        <StyledText style={{}}>Take the guesswork out of catching up over a bite to eat</StyledText>
        <Graphic/>
        <Text style={{fontSize: 50, color: BLUE_2}}>
          <Text style={{color: BLUE_1}}>.</Text>
          <Text>.</Text>
          <Text>.</Text>
          <Text>.</Text>
        </Text>
        <TouchableOpacity style={styles.signUpButton} onPress={this.onSignUpPress.bind(this)}>
          <StyledText style={{color:WHITE_1, marginTop: 10}}>SIGN UP</StyledText>
        </TouchableOpacity>
      </View>
    );
  }
}

const StyledText = (props) => {
  let style = props.style;
  return <Text {...props} style={[styles.text, style]}>{props.children}</Text>;
}

const Graphic = () => {
  const style = {
    backgroundColor: BLUE_1,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
    justifyContent: 'space-around'
  },
  text: {
    color: BLUE_1,
    textAlign: 'center'
  },
  partialBackground: {
    backgroundColor: BLUE_3,
    position: 'absolute',
    height: '60%',
    width: '200%',
  },
  signUpButton: {
    width: '100%',
    height: 40,
    backgroundColor: BLUE_1,
    borderRadius: 3,
  }
});






