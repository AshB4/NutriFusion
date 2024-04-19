/** @format */

const getProductInfo = async () => {
	// Replace 'YOUR_API_KEY' with your actual API key
	const API_KEY = "YOUR_API_KEY";

	// Define the URL of the API endpoint for retrieving product information
	const url =
		"https://world.openfoodfacts.org/api/v0/product/737628064502.json";

	try {
		// Make a GET request to the API endpoint
		const response = await fetch(`${url}?api_key=${API_KEY}`);

		// Check if the request was successful (status code 200)
		if (response.ok) {
			// Extract relevant information from the response JSON
			const productData = await response.json();
			// Print the product name
			console.log("Product Name:", productData.product.product_name);
		} else {
			// Print an error message if the request was not successful
			console.log("Error:", response.status);
		}
	} catch (error) {
		console.error("Error:", error);
	}
};

// Call the function to fetch product information
getProductInfo();
