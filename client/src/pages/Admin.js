import React, { useState } from "react";
import { createNewPost } from "../utils/api";


export default function Admin() {

    // State to reveal form
    const [newPostForm, setNewPostForm] = useState(false);

    // Set new post form data
    const [userFormData, setUserFormData] = useState({ title: "", body: "", public: false });
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
        };

        try {
            const response = await createNewPost(userFormData);
            if (!response.ok) throw new Error("Something went wrong!");
            const { token, admin } = await response.json();
            console.log(admin);
            auth.login(token);
            setAuth({isLoggedIn: true})
            navigate("/");
        } catch (err) {
            console.error(err);
        };
    };

    return (
        <div>
            <h3>Admin Panel</h3>
            {(newPostForm) ?
                (<form style={{ display: 'flex', flexDirection: 'column', margin: '10vw'}}>
                    <label htmlFor="title">Title</label>
                    <input
                        // value={userFormData.adminName}
                        name="title"
                        // onChange={handleInputChange}
                        type="text"
                    />
                    <label htmlFor="body">Body</label>
                    <input
                        // value={userFormData.email}
                        name="body"
                        // onChange={handleInputChange}
                        type="text"
                    />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: '15vw', marginRight: '15vw' }}>
                        <p>Visibility:</p>
                        <div style={{ marginLeft: '1vw' }}>
                            <input
                                name="visibility"
                                id="public"
                                type="radio"
                            />
                            <label style={{ marginLeft: '1vw' }} htmlFor="public">Public</label>
                        </div>
                        <div style={{ marginLeft: '1vw' }}>
                            <input
                                name="visibility"
                                id="private"
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
                        // type="button"
                        // onClick={handleFormSubmit}
                    >
                        Publish
                    </button>
                </form>) : (<button onClick={revealNewPostForm} >New Post</button>)
            }
        </div>
    );
};