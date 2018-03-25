import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import StyledText from './StyledText';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		backgroundColor: '#fff',
		alignItems: 'center',
		padding: 30,
		justifyContent: 'space-around',
		marginTop: 30
	},
	searchBar: {
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 1, 
		width: '100%',
		height: 50
	}
});

const HomeScreen = (props) => {

	return (
		<View style={styles.container}>
			<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
				<View><Text>Today</Text></View>
				<View><Text>Available 11-2:30</Text></View>
				<View><Text>Avatar</Text></View>
			</View>
			<Image style={{width: '130%', height: '50%'}} source={require('./../assets/Map.png')} />
			<TextInput style={styles.searchBar} onChangeText={(text) => this.setState({text})} value={'placeholder'} />
			<View><Text>List Item</Text></View>
			<View><Text>List Item</Text></View>
			<View><Text>List Item</Text></View>
			<View><Text>List Item</Text></View>
			<Text>Button</Text>
		</View>
	);
}

export default HomeScreen;