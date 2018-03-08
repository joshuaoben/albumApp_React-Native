import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
		<View>
			<Header header = {'Albums A!'} name = {'Laura'} />
			<AlbumList />
		</View>
	);

AppRegistry.registerComponent('albums', () => App);
