import React, { useState } from "react";
import Home from "./Home";
import NewPost from "../components/NewPost";


export default function Admin() {

    // Admin active component state
    const [activeTab, setActiveTab] = useState("All");

    return (
        <div>
            <h3>Admin Panel</h3>
            <nav className="col-7 align-self-center" style={{ backgroundColor: '#EEE' }} >
                <ul className="d-flex flex-column flex-lg-row justify-content-between list-unstyled">
                    <li className="nav-item" onClick={() => setActiveTab("All")}> View All Posts </li>
                    <li className="nav-item" onClick={() => setActiveTab("New")}> New Post </li>
                    <li className="nav-item" onClick={() => setActiveTab("Update")}> Update Post </li>
                </ul>
            </nav>
            {(activeTab === "All") && (<Home />)}
            {(activeTab === "New") && (<NewPost />)}
            {(activeTab === "Update") && (<p>Update</p>)}
        </div>
    );
};