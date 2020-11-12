import React from 'react';

import './style.css';

function Contacts() {
    return (
        <section class="contacts">
        <div class="site-container contact__wrapper">
            <div class="contact__title">
                <h1 class=" about__block-title">Контакты</h1>
            </div>
            <div class="contacts__item">
                <div class="item contact__adress">
                    <h5 class="adress__sub-title">Адрес</h5>
                    <p class="adress__content">г. Молодечно, ул. Строителей, 15а</p>
                </div>
                <div class="item contact__numbers">
                    <h5 class="adress__sub-title">Телефон</h5>
                    <p class="adress__content">+375 29 903-29-09</p>
                    <p class="adress__content">+375 29 707-98-37</p>
                </div>
                <div class="item contact__email">
                    <h5 class="adress__sub-title">Реквизиты</h5>
                    <p class="adress__content">ИП Карпов Д.А. г. Молодечно ул. Мира 10-40 р/с 3013810300010 в АСБ «Беларусбанк» код 769 УНП 690551530 </p>
                </div>
            </div>
        </div>

    </section>
    )
}

export default Contacts;