import React from "react";
import Form from "./form";
import contactUs from "../../../../../images/contact_us_img.png";

import "./style.css";

function ContactUs({onSubmit}) {
  return (
    <section className="contact-us">
      <div className="title">
        <h3>Свяжитесь с нами</h3>
      </div>
      <div className="contact-gradient"></div>
      <div className="site-container">
        <div className="contact-us__wrapper">
          <Form onSubmit={onSubmit}/>
          <div className="contact-us__insert">
            <p>
              Изделия из литьевого мрамора легко сверлится и шлифуется,
              монтировать изделия на камень лучше всего при помощи клеев на
              основе полиэфирной смолы, в таком случае обеспечивается
              максимальная совместимость изделия с каменным основанием. Изделия
              из литьевого мрамора практически не требуют ухода, достаточно
              протирать их от пыли чистой салфеткой.
            </p>
            <img src={contactUs} alt="cemetery"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
