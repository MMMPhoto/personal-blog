import React from "react";
// import { NavLink } from "react-router-dom";

export default function Nav() {

    return (
        <nav className="col-5 align-self-center" style={{ backgroundColor: '#EEE' }} >
            <ul className="d-flex flex-column flex-lg-row justify-content-between list-unstyled">
                <li> Home </li>
                <li> About </li>
                <li> Search </li>
                <li> Contact Me </li>
                <li> Email List </li>
            </ul>
        </nav>
    );
};