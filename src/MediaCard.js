import React from 'react';
import './MediaCard.css';
const MediaCard = ({title, body, imageUrl}) => (
    <div className = "MediaCard">
        <h2>{title}</h2>
        <p>{body}</p>
        <img src = {imageUrl}  alt = {imageUrl}/>
    </div>
);

export default MediaCard;