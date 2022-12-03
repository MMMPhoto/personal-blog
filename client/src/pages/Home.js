import React, { useState, useEffect } from "react";
import Deck from "../components/Deck";
// import Post from '../components/Post';
import { getAllPosts } from "../utils/api";

export default function Home() {

    const [publicPosts, setPublicPosts] = useState([{}]);

    //  Fetch all public posts
    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const response = await getAllPosts();
                let jsonData = await response.json();
                jsonData = jsonData.reverse();
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
            { publicPosts && <Deck cards={publicPosts} /> }
        </div>

    );

    // return (
    //     <div>
    //         { publicPosts && publicPosts.map((post) => (
    //             <Post key={post.id} postData={post} />
    //         ))}
    //     </div>
    // );
};