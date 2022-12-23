import React from "react";
import { Link } from "react-router-dom";
import prettyDateTime from "../utils/dateFormat";
import './Post.css';

export default function Post({postData, adminPage}) {

    // Make dateTimes pretty
    const createdAt = prettyDateTime(postData.createdAt);
    const updatedAt = prettyDateTime(postData.updatedAt);

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
                    <p>Created {createdAt}</p>
                    <p>Updated {updatedAt}</p>

                    </div>
                }
                <p className="post-body">{postData.body}</p>
                <img src="https://picsum.photos/200/300" alt="random placeholder" />
            </Link>
        </div>
    );
};