import React from 'react';

function SuggestionItem(props) {
    return (
        <div className="our-suggestion__insert">
        <img src={props.src} alt='popular good'></img>
        <p>{props.content}</p>
      </div>
    )
}

export default SuggestionItem;