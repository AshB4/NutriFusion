/** @format */

import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Card = ({ title, description, image, isSelected, onPress }) => (
	<TouchableOpacity style={styles.card} onPress={onPress}>
		<View style={styles.row}>
			<View style={styles.icon}>
				<Text style={styles.iconText}>{title.charAt(0)}</Text>
			</View>
			<View style={styles.description}>
				<Text style={styles.descriptionTitle}>{title}</Text>
				<Text style={styles.descriptionText}>{description}</Text>
			</View>
		</View>
	</TouchableOpacity>
);

const AnimatedFlexCards = () => {
	const [selectedCard, setSelectedCard] = useState("c1");

	const cardData = [
		{
			id: "c1",
			title: "Winter",
			description: "Winter has so much to offer - creative activities",
			image: require("./img1.jpeg"),
		},
		{
			id: "c2",
			title: "Digital Technology",
			description: "Gets better every day - stay tuned",
			image: require("./img2.jpeg"),
		},
		{
			id: "c3",
			title: "Globalization",
			description: "Help people all over the world",
			image: require("./img3.jpeg"),
		},
		{
			id: "c4",
			title: "New technologies",
			description: "Space engineering becomes more and more advanced",
			image: require("./img4.jpeg"),
		},
	];

	const handleCardSelection = (cardId) => {
		setSelectedCard(cardId);
	};

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				{cardData.map((card) => (
					<Card
						key={card.id}
						title={card.title}
						description={card.description}
						image={card.image}
						isSelected={selectedCard === card.id}
						onPress={() => handleCardSelection(card.id)}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		height: 400,
		flexDirection: "row",
		flexWrap: "nowrap",
	},
	card: {
		width: 80,
		borderRadius: 15,
		backgroundColor: "#eee",
		overflow: "hidden",
		marginRight: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.8,
		shadowRadius: 5,
		elevation: 15,
		transition: "0.6s cubic-bezier(0.28, -0.03, 0, 0.99)",
	},
	row: {
		flexDirection: "row",
		flexWrap: "nowrap",
	},
	icon: {
		backgroundColor: "#223",
		borderRadius: 50,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
		margin: 15,
	},
	iconText: {
		color: "white",
		fontSize: 20,
	},
	description: {
		flex: 1,
		justifyContent: "flex-end",
		padding: 10,
		opacity: selectedCard === card.id ? 1 : 0,
		transform:
			selectedCard === card.id ? [{ translateY: 0 }] : [{ translateY: 30 }],
		transition: "0.3s ease",
	},
	descriptionTitle: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	descriptionText: {
		color: "#b0b0ba",
		fontSize: 12,
	},
});

export default AnimatedFlexCards;
