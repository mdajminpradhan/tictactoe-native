import React, { Fragment, useState } from 'react';

import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Text, Container, Content, Header, Card, H1, H3, Button, Title } from 'native-base';

import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';

const itemsArray = new Array(9).fill('empty');

const App = () => {
	const [ isCross, setIsCross ] = useState(false);
	const [ winMessage, setWinMessage ] = useState('');

	const changeItem = (itemNumber) => {
		if (winMessage) {
			return Snackbar.show({
				text: winMessage,
				backgroundColor: '#000',
				textColor: '#fff'
			});
		}

		if (itemArray[itemNumber] === 'empty') {
			itemArray[itemNumber] = isCross ? 'cross' : 'circle';
			setIsCross(!isCross);
		} else {
			return Snackbar.show({
				text: 'Position is already filled',
				backgroundColor: 'red',
				color: 'white'
			});
		}


        checkIsWinnder();
	};

	const reloadGame = () => {
		setIsCross(false);
		setWinMessage('');
		itemsArray('empty', 0, 9);
	};

	const checkIsWinner = () => {
        
	};

	return (
		<Container style={{ backgroundColor: '#3339445', padding: 5 }}>
			<Header>
				<Body>LCO TicTacToe</Body>
			</Header>
			<Content>
				<View style={styles.grid}>
					{itemsArray.map((item, index) => (
						<TouchableOpacity style={styles.box} key={index} onPress={() => changeItem(index)}>
							<Card style={styles.card}>
								<Icons name={item} />
							</Card>
						</TouchableOpacity>
					))}
				</View>
				{winMessage ? (
					<View>
						<H1 styles={styles.message}>{winMessage}</H1>
						<Button onPress={reloadGame} primary block rounded>
							<Text>Reload Game</Text>
						</Button>
					</View>
				) : (
					<H3 style={styles.message}>{isCross ? 'Cross' : 'Circle'} turns</H3>
				)}
			</Content>
		</Container>
	);
};

export default App;

const styles = StyleSheet.create({
	grid: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 20
	},
	box: {
		width: '33%',
		marginBottom: 6
	},
	card: {
		height: 120,
		justifyContent: 'center',
		alignItems: 'center'
	},
	message: {
		textAlign: 'center',
		textTransform: 'uppercase',
		color: '#fff',
		marginTop: 20,
		backgroundColor: '#465283',
		paddingVertical: 10,
		marginTop: 10
	}
});
