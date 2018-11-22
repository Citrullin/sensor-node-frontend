import React from 'react';
import { Link } from 'react-router-dom';
//import Banner from './images/banner.jpg';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header>
        <nav role="navigation"
             className="
            [ o-container--column@xs o-container@sm ]
            [ o-vertical-align-center@sm o-vpadding-1@xs ]
            [ o-text-align-center@xs ]
            [ o-background-bright-light ]
        ">
          <Link className="o-grid-1@sm o-vpadding-1@xs o-vpadding-zero@sm" to="/">
            Home
          </Link>
          <Link className="o-grid-1@sm o-vpadding-1@xs o-vpadding-zero@sm" to="/node-groups">
            Node Groups
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
