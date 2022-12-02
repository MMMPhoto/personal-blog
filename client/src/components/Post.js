import React from "react";
import { Link } from "react-router-dom";
import './Post.css';

export default function Post({postData}) {

    return (
        <div className="m-4">
            <Link className="link-style" to={`/posts/${postData.id}`}>
                <h2 className="post-title">{postData.title}</h2>
                <p className="post-body">{postData.body}</p>
                <img src="https://picsum.photos/200/300" alt="random placeholder" />
            </Link>
        </div>
    );
};