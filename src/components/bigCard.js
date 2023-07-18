import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './bigCard.css'; // Import the CSS file for the component
import db from '../data.js';
import FlipCard from './flipCard';

//{ name: "Dog", tag: "dog", substitle: "Labrador", url: "www.google.com", text: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem", image: "https://cdn.wallpapersafari.com/59/60/SBwHrV.jpg"},

const BigCard = (props) => {
    const { index } = props;
    const { name, tag, subtitle, url, text, image } = db.getByIndex(index);

    const [redirect, setRedirect] = useState('');
    if (redirect) {
        return <Redirect to={redirect} />
    }
  return (
    <div className="big-card">
      <img
        className="big-card-image"
        src={image[0]}
        alt="Card Image"
      />
      <div className="big-card-content">
        <h2 className="big-card-title">{name}</h2>
        <p>{subtitle}</p>
        <FlipCard></FlipCard>
        <a className="big-card-link" onClick={() => {setRedirect(`/store/${index}`)}}>
          Learn more
        </a>
        <button className="big-card-button" onClick={() => {setRedirect(`/gallery/${tag}`)}}>
            Close
        </button>
      </div>
    </div>
  );
};

export default BigCard;
