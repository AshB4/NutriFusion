/** @format */

import React from "react";
import { Text, StyleSheet } from "react-native";

const SuccessMessage = ({ message }) => {
	return <Text style={styles.success}>{message}</Text>;
};

const styles = StyleSheet.create({
	success: {
		color: "green",
		fontSize: 16,
	},
});

export default SuccessMessage;
