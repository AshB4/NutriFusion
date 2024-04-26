// One Rep Max (1RM) Calculator

import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const OneRepMaxCalculator = () => {
	const [weight, setWeight] = useState("");
	const [reps, setReps] = useState("");
	const [estimated1RM, setEstimated1RM] = useState(null);

	const calculate1RM = () => {
		const weightFloat = parseFloat(weight);
		const repsInt = parseInt(reps);
		if (weightFloat && repsInt) {
			const estimated1RMValue = weightFloat * (1 + 0.025 * repsInt);
			setEstimated1RM(estimated1RMValue.toFixed(2)); // Round to 2 decimal places
		} else {
			setEstimated1RM(null);
		}
	};

	return (
		<View>
			<Text>Enter Weight (kg):</Text>
			<TextInput
				keyboardType="numeric"
				value={weight}
				onChangeText={setWeight}
				placeholder="Enter weight"
			/>
			<Text>Enter Reps:</Text>
			<TextInput
				keyboardType="numeric"
				value={reps}
				onChangeText={setReps}
				placeholder="Enter reps"
			/>
			<Button title="Calculate 1RM" onPress={calculate1RM} />
			{estimated1RM !== null && <Text>Estimated 1RM: {estimated1RM} kg</Text>}
		</View>
	);
};

export default OneRepMaxCalculator;


// There are several estimation formulas for 1RM, 
// but their accuracy can vary. Here's a common one 
// using the weight lifted for a successful repetition (weight)
//  and the number of repetitions (reps):

// Estimated 1RM = weight (kg) x (1 + 0.025 x reps)
// Important Note: 
// These are just formulas, and the results might not be
// perfectly accurate for everyone. It's always best to 
// consult a healthcare professional for personalized guidance
//  on these calculations, especially for BMI and calorie needs.