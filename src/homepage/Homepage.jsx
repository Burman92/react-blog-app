import React from "react";
import { useUsername } from "../authWrapper/AuthContext";


function Homepage() {
    const username = useUsername();
    const loggedOutUser = "Welcome, Please login to post in the Blog Application. You may still view posts on the Blog Post tab but you cannot post unless you are logged in."
    const loggedInUser = `Welcome ${username}, Please navigate to the Blog Post to start Blogging`
    const loggedIn = username ? loggedInUser : loggedOutUser; 
    return (
        <div className="flex flex-col gap-y-2">
            <h1>
                {loggedIn}
            </h1>
        </div>
        );
    }

export default Homepage;
