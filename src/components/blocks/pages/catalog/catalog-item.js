import React from 'react';

function CatalogItem(props) {

    return (
        <div className="photo-wrapper">
        <img src={props.src} alt={props.classNameItem}></img>
        <div className="background"></div>
        <div className={`frame frame-${props.classNameItem}`}></div>
        <div className="wrapper">
          <span className="photo-wrapper__section-name">
            {props.content}
          </span>
          <button type="button" className="button button__catalog" onClick={props.onClick}>
            Подробнее
          </button>
        </div>
      </div>
    )
}


export default CatalogItem;