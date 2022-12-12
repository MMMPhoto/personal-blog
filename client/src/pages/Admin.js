import React, { useState } from "react";
import NewPost from "../components/NewPost";

export default function Admin() {

    // State to reveal form
    const [newPostForm, setNewPostForm] = useState(false);

    // Set new post form data
    const [userFormData, setUserFormData] = useState({ title: "", body: "", public: false });
    // const navigate = useNavigate();

    // Reveal new post form
    const revealNewPostForm = () => {
        setNewPostForm(true);
    };

    return (
        <div>
            <h3>Admin Panel</h3>
            {(newPostForm) ?
                (<NewPost />) : (<button onClick={revealNewPostForm} >New Post</button>)
            }
        </div>
    );
};