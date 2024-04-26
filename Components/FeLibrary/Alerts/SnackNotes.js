/** @format */

import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	Animated,
	TouchableOpacity,
} from "react-native";

const SnackbarMessage = ({ message, type, duration = 3000 }) => {
	const [fadeAnim] = useState(new Animated.Value(0));

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start();

		setTimeout(() => {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 500,
				useNativeDriver: true,
			}).start();
		}, duration);
	}, []);

	let backgroundColor;
	switch (type) {
		case "error":
			backgroundColor = "#ff6961";
			break;
		case "info":
			backgroundColor = "#a9a9a9";
			break;
		case "success":
			backgroundColor = "#77dd77";
			break;
		case "warning":
			backgroundColor = "#ffcc5c";
			break;
		default:
			backgroundColor = "#a9a9a9";
	}

	const handleDismiss = () => {
		// Logic to dismiss the Snackbar message
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
	};

	// const handleRedo = () => {
	// 	// Logic to handle redo action
	// 	// Example: Refresh the page, resend request, etc.
	// 	//really IDK yet
	// };

	return (
		<Animated.View
			style={[styles.container, { backgroundColor, opacity: fadeAnim }]}>
			<Text style={styles.message}>{message}</Text>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity onPress={handleDismiss}>
					<Text style={styles.button}>X</Text>
				</TouchableOpacity>
				{/* Add an optional action button? */}
				{/* <TouchableOpacity onPress={handleRedo}>
					<Text style={styles.button}>Redo</Text>
				</TouchableOpacity> */}
			</View>
			<TouchableOpacity onPress={() => handleAction()}>
				<Text style={styles.action}>Retry</Text>
			</TouchableOpacity>
		</Animated.View>
	);
};

const handleAction = () => {
	// Handle the action button press here
};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 20,
		left: 20,
		right: 20,
		padding: 10,
		borderRadius: 5,
		flexDirection: "row", // To align the action button horizontally
		alignItems: "center", // To align the action button vertically
	},
	message: {
		color: "#fff",
		fontSize: 16,
		flex: 1, // Allow the message to take up remaining space
	},
	action: {
		color: "#fff",
		fontSize: 16,
		marginLeft: 10, // Add some space between message and action button
	},
});

export default SnackbarMessage;

{/* <SnackbarMessage message="Error occurred!" type="error" />
<SnackbarMessage message="Information message" type="info" />
<SnackbarMessage message="Success message" type="success" />
<SnackbarMessage message="Warning message" type="warning" /> */}

