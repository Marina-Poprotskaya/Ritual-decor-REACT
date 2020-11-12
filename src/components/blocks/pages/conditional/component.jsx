import React from "react";
import WhereBuy from "../main-page/where-buy/component";
import AddressItem from "./address-item";

import "./style.css";

function Conditional() {
  return (
    <section className="conditions">
      <WhereBuy />

      <div className="site-container">
        <div className="conditions__wrapper">
          <div className="conditions__delivery">
            <div className="delivery__img"></div>
            <div className="delivery__sub-title">
              <p>Доставка товара</p>
            </div>
            <div className="delivery__text">
              <p>
                Наша компания оказывает услуги по доставке продукции во все
                крупные города и регионы Республики Беларусь. Подробную
                консультацию можно получить у менеджеров компании по телефонам:
              </p>
            </div>
            <div className="delivery__phone">
              <a href="tel:+375292736039">+375 29 273-60-39</a>
              <a href="tel:+375292736039">+375 29 273-60-39</a>
            </div>
          </div>
          <div className="conditions__point">
            <div className="point__img"></div>
            <div className="point__sub-title">
              <p>Места реализации продукции</p>
            </div>
            <div className="point__adress">
              <AddressItem
                address="г.Молодечно, ул. Карпова, 22"
                phone="+375 29 273-60-39"
                phoneLink="+375292736039"
              />
              <AddressItem
                address="г.Молодечно, ул. Карпова, 22"
                phone="+375 29 273-60-39"
                phoneLink="+375292736039"
              />
              <AddressItem
                address="г.Молодечно, ул. Карпова, 22"
                phone="+375 29 273-60-39"
                phoneLink="+375292736039"
              />
              <AddressItem
                address="г.Молодечно, ул. Карпова, 22"
                phone="+375 29 273-60-39"
                phoneLink="+375292736039"
              />
            </div>
          </div>
        </div>
        <div className="conditions__description">
          <p>
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
      </div>
    </section>
  );
}

export default Conditional;
