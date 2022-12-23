import React, { useState, useEffect } from "react";
import Post from '../components/Post';
import { getAllPosts } from "../utils/api";
import auth from "../utils/auth";

export default function PostList() {

    const [publicPosts, setPublicPosts] = useState([{}]);

    //  Fetch all public posts
    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const token = auth.getToken();
                const response = await getAllPosts(token);
                const jsonData = await response.json();
                console.log(jsonData);
                setPublicPosts(jsonData);
            } catch (error) {
                console.log("error", error);
            };
        };
        fetchAllPosts();
    }, []);

    return (
        <div>
            { publicPosts && publicPosts.map((post, index) => (
                <Post key={index} postData={post} />
            ))}
        </div>
    );
};