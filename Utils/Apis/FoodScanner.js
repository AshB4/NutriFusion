/** @format */

import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const ScanFood = () => {
	const [scanned, setScanned] = useState(false);
	const [productData, setProductData] = useState(null);

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);
		getProductInfo(data);
	};

	const getProductInfo = async (barcode) => {
		try {
			const response = await fetch(
				`https://world.openfoodfacts.net/api/v2/product/${barcode}?fields=product_name,nutriscore_data,nutriments,nutrition_grades`
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			setProductData(data);
		} catch (error) {
			console.error("There was a problem fetching the product data:", error);
		}
	};

	return (
		<View style={styles.container}>
			{!scanned ? (
				<View style={styles.scanContainer}>
					<Text style={styles.scanText}>Scan the product barcode</Text>
					<BarCodeScanner
						onBarCodeScanned={handleBarCodeScanned}
						style={styles.barcodeScanner}
					/>
				</View>
			) : (
				<View style={styles.resultContainer}>
					{productData ? (
						<View>
							<Text style={styles.title}>
								{productData.product.product_name}
							</Text>
							<Text style={styles.subtitle}>Nutritional Information:</Text>
							<View style={styles.nutrientContainer}>
								<Text>
									Energy: {productData.product.nutriments.energy} kcal
								</Text>
								<Text>Fat: {productData.product.nutriments.fat} g</Text>
								<Text>
									Carbohydrates: {productData.product.nutriments.carbohydrates}{" "}
									g
								</Text>
								<Text>
									Proteins: {productData.product.nutriments.proteins} g
								</Text>
								<Text>Sugars: {productData.product.nutriments.sugars} g</Text>
								<Text>Sodium: {productData.product.nutriments.sodium} g</Text>
							</View>
							<Text style={styles.grade}>
								Nutrition Grade:{" "}
								{productData.nutriscore_data.grade.toUpperCase()}
							</Text>
						</View>
					) : (
						<Text>Loading product data...</Text>
					)}
					<Button title="Scan Again" onPress={() => setScanned(false)} />
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
	},
	scanContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	scanText: {
		fontSize: 18,
		marginBottom: 20,
	},
	barcodeScanner: {
		width: "100%",
		height: "50%",
	},
	resultContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
	nutrientContainer: {
		marginBottom: 10,
	},
	grade: {
		fontSize: 16,
		marginTop: 10,
	},
});

export default ScanFood;
