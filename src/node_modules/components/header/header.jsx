import React from 'react';
import Logo from '../logo';
import LagnSwithcher from '../lagnSwithcher';

function header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <Logo />
          </div>
          <div className="header__right">
            <LagnSwithcher />
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
