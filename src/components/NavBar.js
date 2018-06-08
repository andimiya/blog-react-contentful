import React from 'react';
const sudokrewLogo = require('../assets/sudokrew-logo.svg');

class NavBar extends React.Component {
  render() {
    return (
      <header className="header" role="banner">
        <div className="container">
          <a className="header__logo" href="https://sudokrew.com">
            <img
              className="sudokrew-logo-img"
              src={sudokrewLogo}
              alt="Sudokrew Logo"
            />
          </a>
          <div className="navigation">
            <a className="navigation__link" href="https://sudokrew.com/about">
              About Us
            </a>
            <a className="navigation__link" href="https://sudokrew.com/work">
              Our Work
            </a>
            <a className="navigation__link" href="https://sudokrew.com/team">
              Team
            </a>
            <a className="navigation__link" href="/">
              Blog
            </a>
            <a className="navigation__link" href="https://sudokrew.com/contact">
              Contact
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
