import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.partialBackground}></View>
        <StyledText style={{marginTop: '20%', fontSize: 30}}>Welcome to</StyledText>
        <StyledText style={{fontSize: 30}}>Lunch</StyledText>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <StyledText>Take the guesswork out of catching up over a bite to eat</StyledText>
        <Text></Text>
        <Text></Text>
        <Graphic/>
        <Text>....</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <StyledText style={[styles.text]}>SIGN UP</StyledText>
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
    backgroundColor: '#2799fb',
    height: 100,
    width: 100
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
    padding: 30
  },
  text: {
    color: '#2799fb',
    textAlign: 'center'
  },
  partialBackground: {
    backgroundColor: '#f1f9ff',
    position: 'absolute',
    height: '60%',
    width: '200%',
  },
});






