import React from 'react';
import { useHistory } from "react-router-dom";

function CatalogItem(props) {

  const history = useHistory();

  const handleClick = () => {
    if(history.location.pathname==='/catalog') {
      history.push("/catalog-item"); 
    } else {
      props.onClick()
    }
  };

    return (
        <div className="photo-wrapper">
        <img src={props.src} alt={props.classNameItem}></img>
        <div className="background"></div>
        <div className={`frame frame-${props.classNameItem}`}></div>
        <div className="wrapper">
          <span className="photo-wrapper__section-name">
            {props.content}
          </span>
          <button type="button" className="button button__catalog" onClick={handleClick}>
            Подробнее
          </button>
        </div>
      </div>
    )
}


export default CatalogItem;