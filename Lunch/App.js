import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import SplashScreen from './src/SplashScreen';



const BLUE_1 = '#2799fb';//main darker font color
const BLUE_2 = '#bce0fd';//light dot color
const BLUE_3 = '#f1f9ff';//light background color
const WHITE_1 = '#fff';


export default class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      loggedIn: false,
      fontsLoaded: false,
      page: 'splashScreen'
    };
  }

  componentDidMount() {

    //load fonts
    Font.loadAsync({
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    }).then(() => {
      this.setState({
        fontsLoaded: true
      })
    });         


    //set fake timeout for splash screen
    setTimeout(() => {
      this.setState({
        page: 'onboarding'
      });
    }, 3000);

  }

  onSignUpPress() {
    this.setState({loggedIn: true});
  }

  renderOnBoardingPage() {
    return (
      <View style={styles.container}>
        <Graphic/>
        <Text style={{fontSize: 50, color: BLUE_2}}>
          <Text style={{color: BLUE_1}}>.</Text>
          <Text>.</Text>
          <Text>.</Text>
          <Text>.</Text>
        </Text>
        <View>
          <StyledText style={{fontSize: 30, fontFamily: 'Roboto-Light'}}>Welcome to</StyledText>
          <StyledText style={{fontSize: 30, fontFamily: 'Roboto-Light'}}>Lunch</StyledText>
        </View>
        <StyledText style={{fontFamily: 'Roboto-Regular'}}>Take the guesswork out of catching up over a bite to eat</StyledText>
        <TouchableOpacity style={styles.signUpButton} onPress={this.onSignUpPress.bind(this)}>
          <StyledText style={{color:WHITE_1, marginTop: 10, fontFamily: 'Roboto-Bold'}}>SIGN UP</StyledText>
        </TouchableOpacity>
      </View>
    );
  }


  render() {

    if(!this.state.fontsLoaded) {
      return <Expo.AppLoading/>;
    }

    if(this.state.page === 'splashScreen') {
      return <SplashScreen/>
    } else if(this.state.page === 'onboarding') {
      return this.renderOnBoardingPage();
    }
  }
}

const StyledText = (props) => {
  let style = props.style;
  return <Text {...props} style={[styles.text, style]}>{props.children}</Text>;
}

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
  signUpButton: {
    width: '100%',
    height: 40,
    backgroundColor: BLUE_1,
    borderRadius: 3,
  }
});






