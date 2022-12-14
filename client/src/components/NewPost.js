import React, { useState } from "react";
import { createNewPost, getCurrentAdmin } from "../utils/api";
import auth from "../utils/auth";

export default function NewPost() {

    // Set new post form data
    const [userFormData, setUserFormData] = useState({ title: "", body: "", public: false });

    // Capture form data to state
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    // Capture radio data
    const handleVisibility = (event) => {
        setUserFormData({ public: event.target.value });
    };
    
    // Submit form data on click
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Check if form has everything
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        };

        try {
            const loggedIn = auth.loggedIn();
            if (!loggedIn) return false;
            const token = auth.getToken();
            console.log(`token: ${token}`);
            const checkAdmin = await getCurrentAdmin(token);
            if (!checkAdmin) throw new Error("something went wrong!");
            const admin = await checkAdmin.json();
            console.log(admin);
            console.log(userFormData);
            const response = await createNewPost(userFormData);
            if (!response.ok) throw new Error("Something went wrong!");
            const newPost = await response.json();
            console.log(newPost);
        } catch (err) {
            console.error(err);
        };
    };

    return (
        <form style={{ display: 'flex', flexDirection: 'column', margin: '10vw'}}>
                <label htmlFor="title">Title</label>
                <input
                    value={userFormData.title}
                    name="title"
                    onChange={handleInputChange}
                    type="text"
                />
                <label htmlFor="body">Body</label>
                <input
                    value={userFormData.body}
                    name="body"
                    onChange={handleInputChange}
                    type="text"
                />
                <div 
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: '15vw', marginRight: '15vw' }}
                    onChange={handleVisibility}
                    >
                    <p>Visibility:</p>
                    <div style={{ marginLeft: '1vw' }}>
                        <input
                            name="visibility"
                            value={true}
                            type="radio"
                        />
                        <label style={{ marginLeft: '1vw' }} htmlFor="public">Public</label>
                    </div>
                    <div style={{ marginLeft: '1vw' }}>
                        <input
                            name="visibility"
                            value={false}
                            type="radio"
                        />
                        <label style={{ marginLeft: '1vw' }} htmlFor="private">Private</label>
                    </div>
                </div>
                <button
                    // type="button"
                    // onClick={handleFormSubmit}
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={handleFormSubmit}
                >
                    Publish
                </button>
            </form>
    );
};

