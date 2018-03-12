import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2E43',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SplashScreen = () => {

  const iconStyle = {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 50,
    width: 50,
  }

  const titleStyle = {
    fontSize: 60,
    color: '#F23838',
    fontFamily: 'Roboto-Medium'
  }

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <View style={iconStyle}></View>
        <Text style={titleStyle}>Lunch</Text>
      </View>
    </View>
  );
}



