import React, { useState, useEffect } from "react";
import Post from '../components/Post';
import { getAllPosts } from "../utils/api";

export default function Home() {

    const [publicPosts, setPublicPosts] = useState([{}]);

    //  Fetch all public posts
    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const response = await getAllPosts();
                const jsonData = await response.json();
                console.log(jsonData);
            } catch (error) {
                console.log("error", error);
            };
        };
        fetchAllPosts();
    }, []);

    return (
        <div>
            <Post />
            <hr></hr>
            <Post />
        </div>
    );
};