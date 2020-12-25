import React from 'react';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';

import './style.css'

function Footer() {

    return (
        <footer className="footer">
        <div className="site-container">
            <div className="footer_wrapper">
                <div className="footer_insert">
                    <div className="footer_insert_column">
                        <img src={logo} alt="logo"></img>
                        <p>г. Молодечно, ул. Строителей, 15а +375 29 903-29-09 <br /> +375 29 707-98-37 </p>
                    </div>
                    <div className="footer_insert_column">
                        <span>Информация</span>
                        <ul>
                            <li><Link to="/catalog">Каталог</Link></li>
                            <li><Link to="/our-projects">Наши проекты</Link></li>
                            <li><Link to="/about-company">О нас</Link></li>
                            <li><Link to="/conditional">Условия работы</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                        </ul>
                    </div>
                    <div className="footer_insert_column">
                        <span>Категория</span>
                        <ul>
                            <li><Link to="/catalog-item">Фотокерамика</Link></li>
                            <li><a href="#">Для памятников</a></li>
                            <li><a href="#">Вазы</a></li>
                            <li><a href="#">Скульптуры</a></li>
                        </ul>
                    </div>
                    <div className="footer_insert_column">
                        <span>Время работы</span>
                        <ul>
                            <li>Пн-Пт 09:00 — 18:00 </li>
                            <li>Сб-Вск Выходной</li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className="footer_insert">
                    <p>ИП Карпов Д.А. г. Молодечно ул. Мира 10-40 р/с 3013810300010 в АСБ «Беларусбанк» код 769 УНП 690551530
                    </p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;