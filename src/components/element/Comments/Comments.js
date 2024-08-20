import React, { useEffect, useState } from 'react';
import '../Comments/Comments.css'; 

const CommentCards = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => setComments(data));
    }, []);

    return (
        <div className="comment-cards">
            {comments.map(comment => (
                <div key={comment.id} className="comment-card">
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentCards;
