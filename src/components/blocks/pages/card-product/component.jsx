import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { cardProductData } from "./data";
import PopularGoods from "../main-page/popular-goods/component";
import {  Button } from "antd";
import { MinusOutlined, PlusOutlined, VerticalAlignBottomOutlined, LoadingOutlined } from "@ant-design/icons";

import "./style.css";

const CardProduct = () => {
  let params = useParams();
  const { id } = params;

  const ButtonGroup = Button.Group;

  const [count, setCount] = useState(1);
  const [orderStatusIcon, setOrderStatusIcon] = useState(false)

  const increase = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const decline = () => {
    let newCount = count - 1;
    if (count <= 1) {
      newCount = 0;
    }
    setCount(newCount);
  };

  const handleMakeOrder = () => {
    console.log(`заказать ${count} штук`);
    setOrderStatusIcon(true)
    setTimeout(() => {
      setOrderStatusIcon(false) 
      setCount(1);
    }, 1500);
  }

  return (
    <section className="card-product__wrapper">
      <div className="site-container">
        <div className="title card-product__title">
          <h3>{cardProductData[id].title}</h3>
        </div>
        <div className="card-product__layout">
          <div className="card-product__item">
            <img src={cardProductData[id].url} alt="card-product"></img>
          </div>
          <div className="card-product__item">
            <div className="card-product__item-row row-first">
              <div className="item-article">{cardProductData[id].article}</div>
              <div>
                <ButtonGroup>
                  <Button onClick={decline}>
                    <MinusOutlined />
                  </Button>
                  <span className="item-amount">{count}</span>
                  <Button onClick={increase}>
                    <PlusOutlined />
                  </Button>
                </ButtonGroup>
              </div>
              <div className="item-price">{cardProductData[id].price}</div>
              <div className="item-notice">Оптовая цена от 5 единиц</div>
            </div>
            <div className="card-product__item-row row-second">
                <button className="button" id="order-button" onClick={handleMakeOrder}>
                  {orderStatusIcon && <LoadingOutlined />}
                  Заказать
                  </button>
                <button  className="button download-btn" >
                   <VerticalAlignBottomOutlined className="download-btn__icon"/>
                    Скачать прайс
                </button>
            </div>
            <div className="address-where-buy">
              <p className="address-text">Вы можете купить этот товар в магазинах</p>
              <p className="address-item">ИП Кулаго А.С. г.Молодечно, ул. Ф. Скорины 17, <span>8 029 273-60-39</span></p>
              <p className="address-item">ИП Кулаго А.С. г.Молодечно, ул. Ф. Скорины 17, <span>8 029 273-60-39</span></p>
            </div>
            <hr className="separate-line"></hr>
            <div className="item-characteristic">
              <span className="item-characteristic__title">Характеристики</span>
               {cardProductData[id].characteristics.map((item, index) => {
                 return (
                   <div className="characteristic__wrapper" key={index}>
                     <span className="characteristic_title">{item.title}</span>
                     <span className="characteristic_value">{item.value}</span>
                   </div>
                 )
               })}
            </div>
          </div>
        </div>
        <div className="card-product__description">
          <span className="description__title">Описание</span>
          <p className="description__text">{cardProductData[id].description}</p>
        </div>
      </div>
      <div className="card-product__popular-goods">
        <PopularGoods />
      </div>
      <div className="site-container">
        <p className="our-description">
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
};

export default CardProduct;
