import React from "react";
import GoodItem from "./good-item";
import { useHistory } from "react-router-dom";
import cross from "../../../../../images/cross.png";

import "./style.css";

function PopularGoods() {
  const history = useHistory();

  const handleSwitchToCatalog = () => {
    history.push("/catalog");
  };

  return (
    <section className="popular-goods">
      <div className="site-container">
        <div className="title">
          <h3>Популярные товары</h3>
        </div>
        <div className="popular-goods__wrapper">
          <GoodItem
            src={cross}
            name="Антит золото"
            description="КРЕСТ ПРАВОСЛАВНЫЙ, РАЗМЕР 11,7"
            price="20 руб"
          />
          <GoodItem
            src={cross}
            name="Антит золото"
            description="КРЕСТ ПРАВОСЛАВНЫЙ, РАЗМЕР 11,7"
            price="20 руб"
          />
          <GoodItem
            src={cross}
            name="Антит золото"
            description="КРЕСТ ПРАВОСЛАВНЫЙ, РАЗМЕР 11,7"
            price="20 руб"
          />
          <GoodItem
            src={cross}
            name="Антит золото"
            description="КРЕСТ ПРАВОСЛАВНЫЙ, РАЗМЕР 11,7"
            price="20 руб"
          />
        </div>
        <button
          className="button popular-goods-btn"
          onClick={handleSwitchToCatalog}
        >
          Перейти в каталог
        </button>
      </div>
    </section>
  );
}

export default PopularGoods;
