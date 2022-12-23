import React, { useState, useEffect } from "react";
import Post from '../components/Post';
import { getAllPosts } from "../utils/api";
import auth from "../utils/auth";

export default function PostList() {

    const [allPosts, setAllPosts] = useState([{}]);
    const [postFilter, setPostFilter] =useState({
        sort: "desc by date",
        published: "all",
        public: "all",
        keyword: "",
    })
    const adminPage = true;

    //  Fetch all posts
    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const token = auth.getToken();
                const response = await getAllPosts(token);
                const jsonData = await response.json();
                console.log(jsonData);
                setAllPosts(jsonData);
            } catch (error) {
                console.log("error", error);
            };
        };
        fetchAllPosts();
    }, []);

    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenely' }}>
                <div className="d-flex flex-row">
                    <label htmlFor="body">Keyword</label>
                    <input
                        // value={userFormData.body}
                        name="body"
                        // onChange={handleInputChange}
                        type="text"
                    />
                </div>            
                <div 
                    style={{ display: 'flex', flexDirection: 'row', marginLeft: '2vw' }}
                    // value={postPublic}
                    >
                    <p>Visibility:</p>
                    <div style={{ marginLeft: '1vw' }}>
                        <input
                            name="visibility"
                            value={'both'}
                            // checked={postPublic === true}
                            // onChange={() => setPostPublic(true)}
                            type="radio"
                        />
                        <label style={{ marginLeft: '1vw' }} htmlFor="public">All</label>
                    </div>
                    <div style={{ marginLeft: '1vw' }}>
                        <input
                            name="visibility"
                            value={'public'}
                            // checked={postPublic === true}
                            // onChange={() => setPostPublic(true)}
                            type="radio"
                        />
                        <label style={{ marginLeft: '1vw' }} htmlFor="public">Public</label>
                    </div>
                    <div style={{ marginLeft: '1vw' }}>
                        <input
                            name="visibility"
                            value={'private'}
                            // checked={postPublic === false}
                            // onChange={() => setPostPublic(false)}
                            type="radio"
                        />
                        <label style={{ marginLeft: '1vw' }} htmlFor="private">Private</label>
                    </div>
                </div>
                <div 
                    style={{ display: 'flex', flexDirection: 'row', marginLeft: '2vw' }}
                    // value={postPublic}
                    >
                    <p>Published:</p>
                    <div style={{ marginLeft: '1vw' }}>
                        <input
                            name="published"
                            value={'both'}
                            // checked={postPublic === true}
                            // onChange={() => setPostPublic(true)}
                            type="radio"
                        />
                        <label style={{ marginLeft: '1vw' }} htmlFor="public">All</label>
                    </div>
                    <div style={{ marginLeft: '1vw' }}>
                        <input
                            name="published"
                            value={'published'}
                            // checked={postPublic === true}
                            // onChange={() => setPostPublic(true)}
                            type="radio"
                        />
                        <label style={{ marginLeft: '1vw' }} htmlFor="public">Published</label>
                    </div>
                    <div style={{ marginLeft: '1vw' }}>
                        <input
                            name="published"
                            value={'draft'}
                            // checked={postPublic === false}
                            // onChange={() => setPostPublic(false)}
                            type="radio"
                        />
                        <label style={{ marginLeft: '1vw' }} htmlFor="private">Draft</label>
                    </div>
                </div>
            </form>
            { allPosts && allPosts.map((post, index) => (
                <Post key={index} postData={post} adminPage={adminPage} />
            ))}
        </div>
    );
};