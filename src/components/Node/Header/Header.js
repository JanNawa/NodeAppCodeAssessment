import React from 'react';
import './Header.css';
import { HeaderItems } from './HeaderItems';

// loop all headerItems on top navigation
export const Header = () => (
  <header className="Header">
      {
        HeaderItems.map((item) => {
          return (
            <a href={item.url} key={item}>
              <img src={item.image} className={item.className} alt={item.alt} />
            </a>
          )
        })
      }
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
