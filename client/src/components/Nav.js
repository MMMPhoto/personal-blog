import React from "react";
import { NavLink } from "react-router-dom";
import auth from "../utils/auth";
import './Nav.css';

export default function Nav({loggedIn}) {

    return (
        <nav className="col-7 align-self-center" style={{ backgroundColor: '#EEE' }} >
            <ul className="d-flex flex-column flex-lg-row justify-content-between list-unstyled">
                <NavLink className="nav-item" to="/"> Home </NavLink>
                <NavLink className="nav-item" to="/about"> About </NavLink>
                <NavLink className="nav-item" to="/search"> Search </NavLink>
                <NavLink className="nav-item" to="/contact"> Contact Me </NavLink>
                <NavLink className="nav-item" to="/email-list"> Email List </NavLink>
                {(loggedIn) && (
                    <>
                        <NavLink className="nav-item" to="/admin">Admin</NavLink>
                        <NavLink className="nav-item" to="/" onClick={auth.logout}>Log out</NavLink>
                    </>
                )}
            </ul>
        </nav>
    );
};