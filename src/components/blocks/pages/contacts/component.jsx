import React from 'react';
import Map from './map';

import './style.css';

function Contacts() {
    return (
        <section className="contacts">
        <div className="site-container contact__wrapper">
            <div className="contact__title">
                <h1 className=" about__block-title">Контакты</h1>
            </div>
            <div className="contacts__item">
                <div className="item contact__adress">
                    <h5 className="adress__sub-title">Адрес</h5>
                    <p className="adress__content">г. Молодечно, ул. Строителей, 15а</p>
                </div>
                <div className="item contact__numbers">
                    <h5 className="adress__sub-title">Телефон</h5>
                    <p className="adress__content">+375 29 903-29-09</p>
                    <p className="adress__content">+375 29 707-98-37</p>
                </div>
                <div className="item contact__email">
                    <h5 className="adress__sub-title">Реквизиты</h5>
                    <p className="adress__content">ИП Карпов Д.А. г. Молодечно ул. Мира 10-40 р/с 3013810300010 в АСБ «Беларусбанк» код 769 УНП 690551530 </p>
                </div>
            </div>
        </div>
            <div className="map-wrapper">
            <Map />
            </div>
    </section>
    )
}

export default Contacts;