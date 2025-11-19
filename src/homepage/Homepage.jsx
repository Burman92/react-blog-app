import React from "react";
import { useUsername } from "../authWrapper/AuthContext";


function Homepage() {
    const username = useUsername();
    const loggedOutUser = "Welcome, Please login to post in the Blog Application. You may still view posts on the Blog Post tab but you cannot post unless you are logged in."
    const loggedInUser = `Welcome ${username}, Please navigate to the Blog Post to start Blogging`
    const loggedIn = username ? loggedInUser : loggedOutUser; 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-y-4 bg-gray-50">
            <h1 className="text-2xl font-semibold text-gray-800 text-center bg-white shadow-md p-6 rounded-xl max-w-xl">
                {loggedIn}
            </h1>
        </div>
        );
    }

export default Homepage;
