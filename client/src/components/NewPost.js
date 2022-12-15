import React, { useState, useEffect } from "react";
import { createNewPost, getCurrentAdmin } from "../utils/api";
import auth from "../utils/auth";

export default function NewPost() {

    // Set new post form data
    const [userFormData, setUserFormData] = useState({ postAuthor: "", title: "", body: "", public: false });

    // Capture form data to state
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    // Validate form state
    const validateFormState = ({ title, body }) => {
       if (!title) return false;
       if (!body) return false;
       return true;
    };

    // Add post author to state on load
    useEffect(() => {
        // Get post author from token 
        const getPostAuthor = async () => {
            const token = auth.getToken();
            const checkAdmin = await getCurrentAdmin(token);
            if (!checkAdmin) throw new Error("Can't find Admin!");
            const admin = await checkAdmin.json();
            // Add post author to state
            setUserFormData({ postAuthor: admin.id });
        };
        getPostAuthor();
    }, []);
    
    // Submit form data on click
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            // Validate form state
            const formValid = validateFormState(userFormData);
            if (!formValid) {
                console.log('complete all fields')
                return;
            };
            // Check token and get post author
            const loggedIn = auth.loggedIn();
            if (!loggedIn) return false;
            
            // Send post to database
            const response = await createNewPost(userFormData);
            if (!response.ok) throw new Error("Something went wrong publishing your post!");
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
                    value={userFormData.public}
                    >
                    <p>Visibility:</p>
                    <div style={{ marginLeft: '1vw' }}>
                        <input
                            name="visibility"
                            value={true}
                            checked={userFormData.public === true}
                            onChange={() => setUserFormData({ public: true })}
                            type="radio"
                        />
                        <label style={{ marginLeft: '1vw' }} htmlFor="public">Public</label>
                    </div>
                    <div style={{ marginLeft: '1vw' }}>
                        <input
                            name="visibility"
                            value={false}
                            checked={userFormData.public === false}
                            onChange={() => setUserFormData({ public: false })}
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

