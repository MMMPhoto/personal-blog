import React from "react";

export default function Post() {

    const placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
        <div className="m-4">
            <h2>Post Title</h2>
            <p>{placeholder}</p>
            <img src="https://picsum.photos/200/300" alt="random placeholder" />
            <p>{placeholder}</p>
        </div>
    );
};