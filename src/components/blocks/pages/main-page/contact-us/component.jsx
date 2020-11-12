import React from "react";
import contactUs from '../../../../../images/contact_us_img.png'

import "./style.css";

function ContactUs() {
  return (
    <section className="contact-us">
      <div className="title">
        <h3>Свяжитесь с нами</h3>
      </div>
      <div className="contact-gradient"></div>
        <div className="site-container">
          <div className="contact-us__wrapper">
            <form className="contact-us__insert">
              <input type="text" name="name" placeholder="Ваше имя*" required />
              <input
                type="tel"
                name="tel"
                placeholder="Номер телефона*"
                required
              />
              <textarea name="message" placeholder="Сообщение"></textarea>
              <input
                type="submit"
                className="button"
                value="Оставить заявку"
              ></input>
            </form>
            <div className="contact-us__insert">
              <p>
                Изделия из литьевого мрамора легко сверлится и шлифуется,
                монтировать изделия на камень лучше всего при помощи клеев на
                основе полиэфирной смолы, в таком случае обеспечивается
                максимальная совместимость изделия с каменным основанием.
                Изделия из литьевого мрамора практически не требуют ухода,
                достаточно протирать их от пыли чистой салфеткой.
              </p>
              <img src={contactUs} alt="cemetery"></img>
            </div>
          </div>
        </div>
    </section>
  );
}

export default ContactUs;
