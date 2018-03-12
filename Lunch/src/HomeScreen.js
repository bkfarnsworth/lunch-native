import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StyledText from './StyledText';


const HomeScreen = (props) => {

   //props.onSignUpPress



    //date   // profile avatar, availability

    //map

    //search bar


    //list of friends

    //grab lunch button


   return (
    <View style={styles.container}>
      <Text style={{fontSize: 50, color: 'black'}}>
        Home
      </Text>
    </View>
   );
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

export default HomeScreen;