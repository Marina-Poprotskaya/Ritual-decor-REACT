import React from 'react';
import ourProductsLeft from '../../../../../images/our_products_left.png';
import ourProductsRight from '../../../../../images/our_products_right.png';

import './style.css';

function OurProducts({ onClick }) {
  return (
    <section className="our-production">
      <div className="title">
        <h3>Наша продукция</h3>
      </div>
      <div className="background_gradient">
        <div className="site-container">
          <div className="our-production__wrapper">
            <div className="our-production__insert line_left">
              <img src={ourProductsLeft} alt="our_products"></img>
              <p>
                Отвержденные полиэфирные смолы обладают высокой прочностью,
                твердостью, износостойкостью, высокой химической стойкостью,
                экологической безопасностью в процессе эксплуатации.
              </p>
              <button className="button" id="order-button" type='button' onClick={onClick}>
                Заказать
              </button>
            </div>
            <div className="our-production__insert shadow_right">
              <img src={ourProductsRight} alt="our_products"></img>
              <p>
                Литьевой мрамор состоит из наполнителя и композитного
                связующего, в качестве наполнителя используется отсев из
                натурального мрамора, в качестве композитного связующего
                используется высококачественная полиэфирная смола со
                специальными добавками.
                <br />
                <br /> Кроме того изделия из литьевого мрамора устойчивы к
                атмосферным воздействиям (ультрафиолетовое излучение, ветровая
                эрозия, многократные переходы через 0°С и др.) и тепловым ударам
                от -50 до +150°С, не впитывают грязь, легко чистятся и не
                поддаются коррозии. Все изделия окрашены высококачественными
                эмалями и покрыты лаком.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
