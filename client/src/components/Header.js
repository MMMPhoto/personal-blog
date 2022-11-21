import React from "react";
import Nav from './Nav';

export default function Header() {

    return (
        <header className='d-flex flex-column flex-lg-row justify-content-between' style={{ backgroundColor: '#EEE' }} >
            <h1>
                Sarah's Blog!
            </h1>
            <Nav />
        </header>
    );
};