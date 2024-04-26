/** @format */

import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const PhoneSettings = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode((previousState) => !previousState);
	};

	return (
		<View style={[styles.container, isDarkMode && styles.darkContainer]}>
			<Text style={styles.text}>Dark Mode: {isDarkMode ? "On" : "Off"}</Text>
			<Switch
				trackColor={{ false: "#767577", true: "#81b0ff" }}
				thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
				ios_backgroundColor="#3e3e3e"
				onValueChange={toggleDarkMode}
				value={isDarkMode}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "var(--background)", // Light mode background color
	},
	darkContainer: {
		backgroundColor: "var(--dark-background)", // Dark mode background color
	},
	text: {
		fontSize: 20,
		marginBottom: 20,
		color: "var(--text)", // Text color based on theme
	},
});

export default PhoneSettings;
