import React from 'react';
import HeaderTop from '../header-top/components';
import HeaderBottom from '../header-bottom/components';

import './style.css';

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}

export default Header;
