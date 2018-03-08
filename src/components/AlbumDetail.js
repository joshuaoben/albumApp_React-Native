import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {

	const { title, artist, thumbnail_image } = album;
	const { thumbnailStyle, headerTextStyle, headerContentStyle, thumbnailCountainerStyle} = styles;

	return (
		<Card> 
			<CardSection>
				<View style={ thumbnailCountainerStyle}>
					<Image

					style={thumbnailStyle}
					 source={{ uri: thumbnail_image }} 

					 />
				</View>
				<View style={headerContentStyle} > 
					<Text style={ headerTextStyle}> {title}</Text>
					<Text> {artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image source={{ uri: image }} />
			</CardSection>	
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle:{
		fontSize: 18
	},
	thumbnailStyle:{
		height:50,
		width: 50
	},
	thumbnailCountainerStyle: {
		justifyontent: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
