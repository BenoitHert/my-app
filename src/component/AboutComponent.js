import React from "react";
import {Link} from "react-router-dom";

function About(){
    return (
        <React.Fragment>
        <div>About</div>
        <Link to="/home">Go to Home Page</Link>
        </React.Fragment>
    )
}
export default About;