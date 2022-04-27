import React from 'react';
import './Header.scss';
import MainLogo from '/src/assets/images/steam.png';
import Cart from '/src/assets/images/cart.png';
import User from '/src/assets/images/user.png';
import { Link } from 'react-router-dom';

interface HeaderComponent {
  url?: string;
}

const Header = (props: HeaderComponent) => {

  const links = ['store', 'offers', 'whishlist', 'support'];

  return (
    <div className="header" data-testid="Header">
      <nav className="navigation">
        <Link to={{pathname: ''}}>
          <img className="logo" src={MainLogo} alt="logo"/>
        </Link>
        <div className="links">
          {
            links.map((link, index) => {
              const url = (link !== 'store' ? link : '');
              return (
                <Link key={index} to={{pathname: url}}>
                  <ul className={props.url === '/' + url ? 'selected' : ''}>
                    <div className="link-text">{link}</div>
                  </ul>
                </Link>
              )
            })
          }
        </div>
      </nav>

      <nav className="user-data">
        <a><img className="utils-icon" src={Cart} alt="shopping cart"/></a>
        <a><img className="utils-icon" src={User} alt="login icon"/></a>
      </nav>
    </div>
  );
}

export default Header;
