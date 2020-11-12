import React from 'react';

import './style.css';

function AboutCompany() {
    return (
        <section className="about">
        <div className="about__wrapper">
            <div className="site-container">
                <div className="about__block left">
                    <h1 className="about__block-title">О нашей компании</h1>
                    <p className="about__block-text">
                        Мы производим продукцию из литьевого мрамора который состоит из наполнителя и композитного связующего, в качестве наполнителя используется отсев из натурального мрамора, в качестве композитного связующего используется высококачественная полиэфирная смола
                        со специальными добавками. Кроме того изделия из литьевого мрамора устойчивы к атмосферным воздействиям (ультрафиолетовое излучение, ветровая эрозия, многократные переходы через 0°С и др.) и тепловым ударам от -50 до +150°С,
                        не впитывают грязь, легко чистятся и не поддаются коррозии. Все изделия окрашены высококачественными эмалями и покрыты лаком
                    </p>
                    <div className="left__img"></div>
                </div>
                <div className="about__block-right">
                  <div className="block-right__background"></div>
                  <div className="right__img"></div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutCompany;