/** @format */

import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

const GlassButton = ({ onPress, children, style }) => {
	const [isPressed, setIsPressed] = useState(false);

	const handlePressIn = () => setIsPressed(true);
	const handlePressOut = () => setIsPressed(false);

	return (
		<TouchableOpacity
			onPress={onPress}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
			style={[styles.glassButton, isPressed && styles.pressed, style]}>
			{children}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	glassButton: {
		backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent white
		borderRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	pressed: {
		backgroundColor: "rgba(255, 255, 255, 0.5)", // Slightly more opaque on press
	},
});

export default GlassButton;
