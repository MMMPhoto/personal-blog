import React from "react";
import { Link } from "react-router-dom";

export default function Post({postData}) {

    return (
        <div className="m-4">
            <Link to={`/posts/${postData.id}`} style={{ textDecoration: 'none' }}>
                <h2>{postData.title}</h2>
                <p>{postData.body}</p>
                <img src="https://picsum.photos/200/300" alt="random placeholder" />
            </Link>
        </div>
    );
};