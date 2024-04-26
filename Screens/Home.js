/** @format */
//This screen helps link you to your workout community

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
                    <div className="box">Nav to diffrent areas in app using the horizontal grid</div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div> */}
					<Avatar src="https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png" />
		<div className="workout-community-screen">
		<h1>Join your workout community</h1>
		<p>Get motivated and support from fellow fitness enthusiasts</p>
		</div>
				</div>
				</div>	
				</div>

	);
};

export default HomeScreen;
