import React from 'react';
import { useHistory } from "react-router-dom";

import './style.css';

function Banner() {

  const history = useHistory();

  const handleSwitchToCatalog = () => {
    history.push("/catalog");
  };

  return (
    <section className="banner">
      <div className="site-container">
        <div className="banner__content-wrapper">
          <h1 className="banner__title">Ritual Decor</h1>
          <p className="banner__text">
            Собственное производство декоративных элементов, скульптур из
            полимер бетона и литьевого мрамора. Более 5ти лет!
          </p>
          <button type="button" className="button banner-btn" onClick={handleSwitchToCatalog}>
            Перейти в каталог
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
