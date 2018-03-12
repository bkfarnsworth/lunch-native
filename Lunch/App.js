import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import SplashScreen from './src/SplashScreen';
import OnboardingScreen from './src/OnboardingScreen';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';

export default class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      loggedIn: false,
      fontsLoaded: false,
      page: 'splashScreen'
    };
  }

  loadFonts() {
    return Font.loadAsync({
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    }).then(() => {
      this.setState({
        fontsLoaded: true
      })
    });  
  }

  componentDidMount() {

    //load fonts
    this.loadFonts(); 

    //set fake timeout for splash screen
    setTimeout(() => {
      this.setState({
        page: 'onboarding'
      });
    }, 500);
  }

  onSignUpPress() {
    this.setState({
      page: 'loginScreen'
    })
  }

  onLoginPress() {
    this.setState({
      page: 'homeScreen'
    }) 
  }


  render() {

    if(!this.state.fontsLoaded) {
      return <Expo.AppLoading/>;
    }

    if(this.state.page === 'splashScreen') {
      return <SplashScreen/>
    } else if(this.state.page === 'onboarding') {
      return <OnboardingScreen onSignUpPress={this.onSignUpPress.bind(this)}/>
    } else if(this.state.page === 'loginScreen') {
      return <LoginScreen onLoginPress={this.onLoginPress.bind(this)}/>
    } else if(this.state.page === 'homeScreen') {
      return <HomeScreen/>
    }

  }
}


