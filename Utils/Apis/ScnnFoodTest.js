/** @format */

import React from "react";
import { View } from "react-native";
import ScanFood from "./FoodScanner";

const App = () => {
	return (
		<View style={{ flex: 1 }}>
			{/* For testing */}
			<ScanFood barcodeNumber="3017624010701" />

			{/* For customers */}
			<ScanFood />
		</View>
	);
};

export default App;
