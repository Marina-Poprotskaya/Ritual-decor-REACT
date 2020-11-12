import React from 'react';

import './style.css';

function Banner() {
  return (
    <section className="banner">
      <div className="site-container">
        <div className="banner__content-wrapper">
          <h1 className="banner__title">Ritual Decor</h1>
          <p className="banner__text">
            Собственное производство декоративных элементов, скульптур из
            полимер бетона и литьевого мрамора. Более 5ти лет!
          </p>
          <button type="button" className="button banner-btn">
            Перейти в каталог
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
