import React from "react";
import Banner from "../banner/component";
import PopularGoods from "../popular-goods/component";
import OurSuggestion from "../our-suggestion/components";
import OurProducts from "../our-products/components";
import OurWorks from "../our-works/component";
import WhereBuy from "../where-buy/component";
import ContactUs from "../contact-us/component";

import "./style.css";

function MainPage(props) {
  const {
    onClick,
    onSubmit,
    onChangeName,
    onChangePhone,
    onChangeMessage,
    name,
    phoneNumber,
    textareaText,
  } = props;

  return (
    <div className="main">
      <Banner />
      <PopularGoods />
      <OurSuggestion />
      <OurProducts onClick={onClick} />
      <OurWorks />
      <WhereBuy />
      <ContactUs 
      onSubmit={onSubmit} 
      onChangeName={onChangeName}
      onChangePhone={onChangePhone}
      onChangeMessage={onChangeMessage}
      name={name}
      phoneNumber={phoneNumber}
      textareaText={textareaText}/>
    </div>
  );
}

export default MainPage;
