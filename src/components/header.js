import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}> {props.header} </Text>
		</View>
		);
};

const styles = {
	viewStyle: {
		backgroundColor:'#dadada',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.4, 
		position: 'relative',
		elevation: 2
		
	},
	textStyle:{
		fontSize: 20,
		paddingTop: 15,
		paddingBottom: 15
	}
};

export default Header;