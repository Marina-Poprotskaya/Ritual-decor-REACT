import React from "react";
import SuggestionItem from "./suggestion-item";
import bulb from "../../../../../images/bulb.png";
import humanBulb from "../../../../../images/human_bulb.png";
import ribbon from "../../../../../images/ribbon.png";
import humanStar from "../../../../../images/human_star.png";

import "./style.css";

function OurSuggestion() {
  return (
    <section className="our-suggestion">
      <div className="site-container">
        <div className="title">
          <h3>Мы предлагаем</h3>
        </div>
        <div className="our-suggestion__wrapper">
          <SuggestionItem
            src={bulb}
            alt="bulb"
            content="Уникальные технологии производства"
          />
          <SuggestionItem
            src={humanBulb}
            alt="human-bulb"
            content="Более 10-ти лет на рынке"
          />
          <SuggestionItem
            src={ribbon}
            alt="ribbon"
            content="Гарантия качества продукции"
          />
          <SuggestionItem
            src={humanStar}
            alt="human-star"
            content="Только положительные отзывы"
          />
        </div>
      </div>
    </section>
  );
}

export default OurSuggestion;
