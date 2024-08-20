import React, { useEffect, useState } from 'react';
import "../Posts/Posts.css"

const PostCards = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);

    return (
        <div className="post-cards">
            {posts.map(post => (
            <div key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p><strong>Post ID:</strong> {post.id}</p>
                <p><strong>User ID:</strong> {post.userId}</p>
                <p>{post.body}</p>
            </div>
            ))}
        </div>
    );
};

export default PostCards;