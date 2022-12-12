import React from "react";
import { createNewPost } from "../utils/api";

export default function NewPost() {

    return (
        <form style={{ display: 'flex', flexDirection: 'column', margin: '10vw'}}>
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
            </form>
    );
};

