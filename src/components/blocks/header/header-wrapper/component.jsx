import React from 'react';
import HeaderTop from '../header-top/components';
import HeaderBottom from '../header-bottom/components';

import './style.css';

function Header({onClick}) {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBottom onClick={onClick}/>
    </header>
  );
}

export default Header;
