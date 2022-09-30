import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <React.Fragment>
        <div>Header</div>
        <Link to="/about">Go to About Page</Link>
        <Link to="/home">Go to Home Page</Link>
        <Link to="/todo">Go to Todo Page</Link>

        </React.Fragment>
    )
}

export default Header;