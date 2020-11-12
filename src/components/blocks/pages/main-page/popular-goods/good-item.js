import React from 'react';

function GoodItem(props) {
    return (
        <div className="popular-goods__insert">
            <img src={props.src} alt={props.alt}></img>
            <span className="metal">{props.name}</span>
            <p>{props.description}</p>
            <span className="price">{props.price}</span>
      </div>
    )
}

export default GoodItem;