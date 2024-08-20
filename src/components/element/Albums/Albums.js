import React, { useEffect, useState } from 'react';
import '../Albums/Albums.css';

const AlbumCards = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => setAlbums(data));
    }, []);

    return (
        <div className="album-cards">
            {albums.map(album => (
            <div key={album.id} className="album-card">
                <h3>{album.title}</h3>
                <p>Album ID: {album.id}</p>
                <p>User ID: {album.userId}</p>
            </div>
            ))}
        </div>
    );
};

export default AlbumCards;
