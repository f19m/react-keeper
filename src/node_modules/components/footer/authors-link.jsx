import React from 'react';

function AuthorsLink({ name, link }) {
  return (
    <a href={link} className="footer__authors-link" target="_blank" rel="noreferrer">{name}</a>
  );
}

export default AuthorsLink;
