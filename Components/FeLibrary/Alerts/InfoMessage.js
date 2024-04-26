/** @format */

import React from "react";
import { Text, StyleSheet } from "react-native";

const InfoMessage = ({ message }) => {
	return <Text style={styles.info}>{message}</Text>;
};

const styles = StyleSheet.create({
	info: {
		color: "blue",
		fontSize: 16,
	},
});

export default InfoMessage;
