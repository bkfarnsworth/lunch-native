import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.partialBackground}></View>
        <Text style={[styles.welcomeMessage, styles.text]}>Welcome to</Text>
        <Text style={[styles.text]}>Lunch</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text>Take the guesswork out of catching up over a bite to eat.</Text>
        <Text></Text>
        <Text></Text>
        <Text>Some graphic</Text>
        <Text>....</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text>SIGN UP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30
  },
  text: {
    color: '#2799fb',
    fontSize: 30,
  },
  partialBackground: {
    backgroundColor: '#f1f9ff',
    position: 'absolute',
    height: '60%',
    width: '200%',
  },
  welcomeMessage: {
    marginTop: '20%'
  },

});
