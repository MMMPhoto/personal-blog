import React from "react";
// import { NavLink } from "react-router-dom";

export default function Nav() {

    return (
        <nav style={{ backgroundColor: '#EEE' }} >
            <ul className='d-flex flex-column flex-lg-row justify-content-between'>
                <li> Home </li>
                <li> Search For Post </li>
                <li> Contact Me </li>
                <li> Email List </li>
            </ul>
        </nav>
    );
};