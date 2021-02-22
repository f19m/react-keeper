import React from 'react';
import './assets/logo-title.png';
import './assets/logo.png';

function Logo() {
  return (
    <a className="header__logo" href="/">
      <img
        src="./assets/logo.png"
        alt="logo"
        className="header__logo-img"
      />
      <img
        src="./assets/logo-title.png"
        alt="logo-title"
        className="header__logo-title"
      />
    </a>
  );
}

export default Logo;
