/** @format */

import React from "react";
import { Text, StyleSheet } from "react-native";

const ErrorMessage = ({ message }) => {
	return <Text style={styles.error}>{message}</Text>;
};

const styles = StyleSheet.create({
	error: {
		color: "red",
		fontSize: 16,
	},
});

export default ErrorMessage;
