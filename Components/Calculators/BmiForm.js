/** @format */

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BmiCalculator = () => {
	const [weight, setWeight] = useState("");
	const [heightFeet, setHeightFeet] = useState("");
	const [heightInches, setHeightInches] = useState("");
	const [bmiResult, setBmiResult] = useState(null);

	const calculateBmi = () => {
		// Convert height to meters
		const totalHeight =
			parseFloat(heightFeet) * 0.3048 + parseFloat(heightInches) * 0.0254;
		// Convert weight to kilograms
		const weightKg = parseFloat(weight) * 0.453592;

		// Calculate BMI
		const bmi = weightKg / (totalHeight * totalHeight);

		// Determine BMI category
		let bmiCategory;
		if (bmi < 18.5) {
			bmiCategory = "Underweight";
		} else if (bmi >= 18.5 && bmi < 25) {
			bmiCategory = "Normal weight";
		} else if (bmi >= 25 && bmi < 30) {
			bmiCategory = "Overweight";
		} else {
			bmiCategory = "Obese";
		}

		setBmiResult({ bmi: bmi.toFixed(1), category: bmiCategory });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Weight (lbs):</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter weight in lbs"
				keyboardType="numeric"
				value={weight}
				onChangeText={setWeight}
			/>
			<Text style={styles.label}>Height (feet):</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter height in feet"
				keyboardType="numeric"
				value={heightFeet}
				onChangeText={setHeightFeet}
			/>
			<Text style={styles.label}>Height (inches):</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter height in inches"
				keyboardType="numeric"
				value={heightInches}
				onChangeText={setHeightInches}
			/>
			<Button title="Calculate BMI" onPress={calculateBmi} />
			{bmiResult && (
				<View style={styles.result}>
					<Text
						style={[
							styles.resultText,
							{
								color:
									bmiResult.category === "Overweight"
										? "orange"
										: bmiResult.category === "Obese"
										? "red"
										: "green",
							},
						]}>
						BMI: {bmiResult.bmi}
					</Text>
					<Text
						style={[
							styles.resultText,
							{
								color:
									bmiResult.category === "Overweight"
										? "orange"
										: bmiResult.category === "Obese"
										? "red"
										: "green",
							},
						]}>
						Category: {bmiResult.category}
					</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	label: {
		fontSize: 18,
		marginBottom: 5,
	},
	input: {
		width: "100%",
		height: 40,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 10,
	},
	result: {
		marginTop: 20,
	},
	resultText: {
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default BmiCalculator;
