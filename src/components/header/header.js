import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <ul className="menu-main">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/generator">Generator</Link>
        </li>
        <li>
          <Link to="/archive">Archive</Link>
        </li>
      </ul>
    </div>
  );
};
