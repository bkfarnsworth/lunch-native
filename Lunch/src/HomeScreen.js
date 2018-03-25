import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import StyledText from './StyledText';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		backgroundColor: '#F5F5F5',
		alignItems: 'center',
		padding: 16,
		justifyContent: 'space-around',
		marginTop: 30
	},
	searchBar: {
		height: 40, 
		borderColor: '#C8CDD6', 
		borderWidth: 1, 
		width: '100%',
		height: 40,
		marginTop: 15,
		marginBottom: 15,
		color: '#78849E',
		paddingTop: 2,
		paddingBottom: 2,
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: 'white'
	}
});

const ListItem = (props) => {

	const styles = {
		height: 30,
		width: '100%',
		backgroundColor: 'white',
		marginTop: 7,
		marginBottom: 7,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}

	return (
		<View style={styles}>
			<Text>Avatar</Text>
			<Text>List Item</Text>
			<Text>Checkbox</Text>
		</View>
	);
}

const HomeScreen = (props) => {

	return (
		<View style={styles.container}>
			<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
				<View><Text>Today</Text></View>
				<View><Text>Available 11-2:30</Text></View>
				<View><Text>Avatar</Text></View>
			</View>
			<Image style={{width: '130%', height: '50%'}} source={require('./../assets/Map.png')} />
			<TextInput style={styles.searchBar} onChangeText={(text) => this.setState({text})} value={'Search'} />
			<View style={{width: '100%', height: 100}}>
				<ListItem/>
				<ListItem/>
				<ListItem/>
			</View>
			<Text>Button</Text>
		</View>
	);
}

export default HomeScreen;