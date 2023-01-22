import React from "react";
import logo from "./img/logo.svg";
import {Link} from "react-router-dom";

export default () => {
    return <>
        <Link to="/">
        <a className="logo" href="/">
        <img src={logo} alt="Dog Food" />
        </a>
        </Link>
 </>
}