import React from 'react';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../../images/logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function HeaderBottom({onClick}) {

  return (
    <div className="header-bottom">
      <div className="site-container">
        <Link to="/">
          <img alt="logo" src={logo}></img>
        </Link>
        <div className="header-bottom__navbar">
          <Nav>
            <Nav.Link href="/catalog-item/0"><span>ФОТОКЕРАМИКА</span></Nav.Link>
            <Nav.Link href="/catalog-item/1"><span>ДЛЯ ПАМЯТНИКОВ</span></Nav.Link>
            <Nav.Link href="/catalog-item/2"><span>ВАЗЫ</span></Nav.Link>
            <Nav.Link href="/catalog-item/3"><span>СКУЛЬПТУРЫ</span></Nav.Link>
            <Nav.Link href="/our-projects"><span>НАШИ ПРОЕКТЫ</span></Nav.Link>
          </Nav>
        </div>
        <div className="header-bottom__contacts">
          <div className="contacts__phone">
            <a href="tel:375299032909">+375 29 903-29-09</a>
            <a href="tel:375297079837">+375 29 707-98-37</a>
          </div>
        </div>
        <button type="button" className="button header-btn" onClick={onClick}>
          Заказать звонок
        </button>
      </div>
    </div>
  );
}

export default HeaderBottom;
