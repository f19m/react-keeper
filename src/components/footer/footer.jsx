import React from 'react';
import './assets/rs-school-js.svg';
import AuthorsLink from './authors-link';

function footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__year">@2021</p>
          <a href="https://rs.school/js/" className="footer__course-link" target="_blank" rel="noreferrer">
            <img src="assets/rs-school-js.svg" style={{ width: '60px', height: 'auto' }} alt="RS School logo" />
          </a>
          <div className="footer__authors-info">
            <AuthorsLink name="f19m" link="https://github.com/f19m" />
            <AuthorsLink name="milanaadams" link="https://github.com/milanaadams" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
