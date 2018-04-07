import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
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
	},
	flatList: {
		width: '100%'
	}
});

const Avatar = (props) => {

	const style = {
		height: 40,
		width: 40,
	}


	return (
		<View style={style}>
			<Image style={{width: '100%', height: '100%'}} source={props.image} />
		</View>
	);
}

const ListItem = (props) => {

	const styles = {
		height: 30,
		width: '100%',
		backgroundColor: 'white',
		marginTop: 7,
		marginBottom: 7,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}

	const nameStyles = {
		flexGrow: 1,
		marginLeft: 10,
		marginRight: 10
	}

	return (
		<View style={styles}>
			<Avatar image={require('./../assets/IMG_1710.png')}/>
			<Text style={nameStyles}>{props.item.name}</Text>
			<Text>{String(props.item.checked)}</Text>
		</View>
	);
}

class HomeScreen extends React.Component {

	constructor(...args) {
		super(...args);
		this.state = {
			searchText: ''
		}
	}

	render() {

		const listItems = [
			{avatar: 'brian.png', name: 'Brian', checked: true, key: 'brian'},
			{avatar: 'grace.png', name: 'Grace', checked: true, key: 'grace'},
			{avatar: 'rose.png', name: 'Rose', checked: true, key: 'rose'},
		];

		const filteredItems = listItems.filter(item => item.name.toLowerCase().includes(this.state.searchText.toLowerCase()));



		return (
			<View style={styles.container}>
				<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 10}}>
					<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
						<Text style={{fontFamily: 'Roboto-Light', fontSize: 28, marginRight: 7, color: '#2A2E43'}}>Today</Text>
						<Text style={{fontFamily: 'Roboto-Light', fontSize: 20, color: '#C8CDD6'}}>▾</Text>
					</View>
					<View style={{flexGrow: 1, marginRight: 10}}>
						<Text style={{textAlign: 'right', color: '#F23838', fontSize: 10}}>Available</Text>
						<Text style={{textAlign: 'right', color: '#F23838', fontSize: 10}}>11-2:30</Text>
					</View>
					<Avatar image={require('./../assets/IMG_1710.png')}/>
				</View>
				<Image style={{width: '130%', height: '50%'}} source={require('./../assets/Map.png')} />
				<TextInput style={styles.searchBar} onChangeText={(text) => this.setState({searchText:text})} value={this.state.searchText} placeholder={'Search'} />
				<FlatList style={styles.flatList} data={filteredItems} renderItem={({item}) => <ListItem item={item}/>} />
				<Text>Button</Text>
			</View>
		);
	}
}

export default HomeScreen;