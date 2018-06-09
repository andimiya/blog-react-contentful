import React from 'react';
import moment from 'moment';
const sudokrewLogo = require('../assets/sudokrew-logo.svg');

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer">
        <div className="container">
          <a className="footer__logo" href="https://sudokrew.com">
            <img src={sudokrewLogo} alt="Sudokrew Logo" />
          </a>
          <p className="footer__copyright">Sudokrew {moment().year()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
