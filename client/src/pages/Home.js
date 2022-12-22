import React, { useState, useEffect } from "react";
import Post from '../components/Post';
import { getPublicPosts } from "../utils/api";

export default function Home() {

    const [publicPosts, setPublicPosts] = useState([{}]);

    //  Fetch all public posts
    useEffect(() => {
        const fetchPublicPosts = async () => {
            try {
                const response = await getPublicPosts();
                const jsonData = await response.json();
                console.log(jsonData);
                setPublicPosts(jsonData);
            } catch (error) {
                console.log("error", error);
            };
        };
        fetchPublicPosts();
    }, []);

    return (
        <div>
            { publicPosts && publicPosts.map((post, index) => (
                <Post key={index} postData={post} />
            ))}
        </div>
    );
};