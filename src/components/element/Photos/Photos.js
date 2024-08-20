import React, { useEffect, useState } from 'react';
import '../Photos/Photos.css';

const PhotoCards = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setPhotos(data)); 
    }, []);

    return (
        <div className="photo-cards">
            {photos.map(photo => (
            <div key={photo.id} className="photo-card">
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <h3>{photo.title}</h3>
            </div>
            ))}
        </div>
    );
};

export default PhotoCards;
