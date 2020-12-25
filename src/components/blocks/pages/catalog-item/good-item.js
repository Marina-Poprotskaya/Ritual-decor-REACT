import React from 'react'

const GoodItem = (props) => {
    return (
        <div className="popular-goods__insert">
            <img src={props.src} alt={props.alt}></img>
            <span className="metal">{props.name}</span>
            <p>{props.description}</p>
            <span className="price">{props.price}</span>
            <span className='article'>{props.article}</span>
      </div>
    )
}

export default GoodItem;