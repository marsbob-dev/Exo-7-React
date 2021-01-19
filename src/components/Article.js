import './Article.css';
import { Component } from 'react';

function Article ({nom, prix}) {
    return(
        <div>
            <h1>Article: {nom} </h1>
            <span>Prix: {prix} </span>
        </div>
    );
}

export default Article