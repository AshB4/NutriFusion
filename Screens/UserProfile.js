/** @format */

// Layout.js
import React from "react";
import UserProfile from "../assets/styles/UserProfile.css";

const Layout = ({ children }) => {
	return (
		<div>
			<UserProfile imageURL="https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png" />
			<div>{children}</div>
		</div>
	);
};

export default Layout;
