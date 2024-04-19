/** @format */

// Main page component
import React from "react";
// import "../assets/styles/HomePage.css"; // Import CSS file for styling
// import Sidebar from "./Sidebar"; // Import the Sidebar component
// import UserProfile from "./UserProfile";

const Avatar = ({ src }) => {
	return (
		<div className="profile-container">
			<img className="user-image" src={src} />
		</div>
	);
};

const HomeScreen = () => {
	return (
		<div className="main-page">
			<div className="container-1">
				<Sidebar />
			</div>
			<div className="container-2">
				<div className="header">
					{/* <UserProfile imageURL="https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png" /> */}
					{/* <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div> */}
					<Avatar src="https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png" />
				</div>
				<div className="body">
					<h1 className="test">Hello World</h1>

					<p style={{ fontFamily: "Bungee Spice" }}>
						Welcome to nutrifit a workout community
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;
