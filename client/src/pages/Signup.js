import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewAdmin } from '../utils/api';
import Auth from '../utils/auth';

export default function Signup({setAuth}) {

    // Set form data state
    const [userFormData, setUserFormData] = useState({ adminName: "", email: "", password: "" });
    const navigate = useNavigate();

    // Capture form data to state
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };
    
    // Submit form data on click
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Check if form has everything
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await createNewAdmin(userFormData);
            if (!response.ok) throw new Error("Something went wrong!");
            const { token, admin } = await response.json();
            console.log(admin);
            Auth.login(token);
            setAuth({isLoggedIn: true})
            navigate("/");
        } catch (err) {
            console.error(err);
        }
        // setUserFormData({ adminName: "", email: "", password: "" });
    };

    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column', margin: '10vw'}}>
                <input
                    value={userFormData.adminName}
                    name="adminName"
                    onChange={handleInputChange}
                    type="text"
                />
                <label htmlFor="adminName">Admin Username</label>
                <input
                    value={userFormData.email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                />
                <label htmlFor="email">Email</label>
                <input
                    value={userFormData.password}
                    name="password"
                    type="password"
                    onChange={handleInputChange}
                />
                <label htmlFor="password">Password</label>
                <button
                    type="button"
                    onClick={handleFormSubmit}
                >
                    Signup
                </button>
            </form>
        </div>
    );
};