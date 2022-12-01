import React from "react";

export default function Post({postData}) {

    return (
        <div className="m-4">
            <h2>{postData.title}</h2>
            <p>{postData.body}</p>
            <img src="https://picsum.photos/200/300" alt="random placeholder" />
        </div>
    );
};