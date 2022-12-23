import React from "react";
import { Link } from "react-router-dom";
import './Post.css';

export default function Post({postData, adminPage}) {

    let createdDate = new Date(postData.createdAt);
    let createdTime = createdDate.toLocaleTimeString('en-US');
    createdDate = createdDate.toLocaleDateString();

    let updatedDate = new Date(postData.updatedAt);
    let updatedTime = updatedDate.toLocaleTimeString('en-US');
    updatedDate = updatedDate.toLocaleDateString();


    return (
        <div className="m-4">
            <Link className="link-style" to={`/posts/${postData.id}`}>
                <h2 className="post-title">{postData.title}</h2>
                {(adminPage === true) &&
                    <div>
                        <div className="d-flex">
                        {(postData.published === true) ? <p>Published</p> : <p>Draft</p>}
                        {(postData.public === true) ? <p>Public</p> : <p>Private</p>}
                    </div>
                    <p>Created: {createdDate} at {createdTime}</p>
                    <p>Updated: {updatedDate} at {updatedTime}</p>

                    </div>
                }
                <p className="post-body">{postData.body}</p>
                <img src="https://picsum.photos/200/300" alt="random placeholder" />
            </Link>
        </div>
    );
};