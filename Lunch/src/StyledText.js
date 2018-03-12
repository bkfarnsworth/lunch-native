import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    textAlign: 'center'
  }
});

const StyledText = (props) => {
  let style = props.style;
  return <Text {...props} style={[styles.text, style]}>{props.children}</Text>;
}

export default StyledText;