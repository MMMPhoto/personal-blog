import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import { getOnePost } from "../utils/api";

export default function SinglePost() {

    const { postId } = useParams();
    const [singlePost, setSinglePost] = useState({});

    //  Fetch post from url params
    useEffect(() => {
        const fetchOnePost = async () => {
            try {
                const response = await getOnePost(postId);
                const jsonData = await response.json();
                console.log(jsonData);
                setSinglePost(jsonData);
            } catch (error) {
                console.log("error", error);
            };
        };
        fetchOnePost();
    }, []);

    return (
        <div>
            <Post postData={singlePost} />
        </div>
    );
};