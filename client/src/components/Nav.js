import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {

    return (
        <nav className="col-5 align-self-center" style={{ backgroundColor: '#EEE' }} >
            <ul className="d-flex flex-column flex-lg-row justify-content-between list-unstyled">
                <NavLink to={"/"}> Home </NavLink>
                <NavLink to={"/about"}> About </NavLink>
                <NavLink to={"/search"}> Search </NavLink>
                <NavLink to={"/contact"}> Contact Me </NavLink>
                <NavLink to={"/email-list"}> Email List </NavLink>
            </ul>
        </nav>
    );
};