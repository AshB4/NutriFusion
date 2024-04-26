/** @format */

import React from "react";
import { Text, StyleSheet } from "react-native";

const WarningMessage = ({ message }) => {
	return <Text style={styles.warning}>{message}</Text>;
};

const styles = StyleSheet.create({
	warning: {
		color: "orange",
		fontSize: 16,
	},
});

export default WarningMessage;
