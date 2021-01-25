import React from 'react';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="site-container">
        <div className="header__navbar">
          <Nav>
            <Nav.Link href="/about-company"><span>О компании</span></Nav.Link>
            <Nav.Link href="/conditional"><span>Условия работы</span></Nav.Link>
            <Nav.Link href="/contacts"><span>Контакты</span></Nav.Link>
          </Nav>
        </div>
        <div className="header__info">
          <span className="info__address">
            Адрес: г. Молодечно, ул.Строителей 15а, оф.1
          </span>
          <a className="info__email" href="mailto:foto-ceramic@yandex.ru">
            Email: foto-ceramic@yandex.ru
          </a>
          <span className="info__time-of-work">
            Время работы: пн-пт 8-30 - 17-00
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
