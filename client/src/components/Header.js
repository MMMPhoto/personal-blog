import React from "react";
import Nav from './Nav';

export default function Header({loggedIn}) {

    return (
        <header className="d-flex flex-column flex-lg-row justify-content-around container w-100" style={{ backgroundColor: '#EEE' }} >
            <h1 className="col-5">
                Sarah's Blog!
            </h1>
            <Nav loggedIn={loggedIn} className="col-5" />
        </header>
    );
};