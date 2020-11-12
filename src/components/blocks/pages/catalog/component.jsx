import React from "react";
import CatalogItem from "./catalog-item";
import photoceramics from "../../../../images/catalog/pic3.jpg";
import vase from "../../../../images/catalog/pic1.jpg";
import memorial from "../../../../images/catalog/pic4.jpg";
import sculpture from "../../../../images/catalog/pic2.jpg";

import "./style.css";

function Catalog() {

  return (
    <section className="catalog">
      <div className="title">
        <h3>Каталог</h3>
      </div>
      <div className="catalog-photo__wrapper">
        <div className="site-container">
          <div className="catalog-photo">
            <CatalogItem
              src={photoceramics}
              content="Фотокерамика"
              classNameItem="photoceramics"
            />
            <CatalogItem
              src={memorial}
              content="Для памятников"
              classNameItem="memorial"
            />
            <CatalogItem src={vase} content="Вазы" classNameItem="vase" />
            <CatalogItem
              src={sculpture}
              content="Скульптуры"
              classNameItem="sculpture"
            />
          </div>
        </div>
      </div>
      <div className="site-container">
        <p className="catalog-text">
          Мы производим продукцию из литьевого мрамора который состоит из
          наполнителя и композитного связующего, в качестве наполнителя
          используется отсев из натурального мрамора, в качестве композитного
          связующего используется высококачественная полиэфирная смола со
          специальными добавками.
          <br />
          <br />
          Кроме того изделия из литьевого мрамора устойчивы к атмосферным
          воздействиям (ультрафиолетовое излучение, ветровая эрозия,
          многократные переходы через 0°С и др.) и тепловым ударам от -50 до
          +150°С, не впитывают грязь, легко чистятся и не поддаются коррозии.
          Все изделия окрашены высококачественными эмалями и покрыты лаком.
        </p>
      </div>
    </section>
  );
}

export default Catalog;
