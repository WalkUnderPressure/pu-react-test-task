import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

const MENU = [
  { id: 1, label: "Products", link: "/products" },
];

function Header() {
  const MenuItems = useMemo(() => {
    return MENU.map(({ id, label, link }) => (
      <li key={`MenuItem[${id}]`}>
        <Link className="header-menu-item" to={link}>{label}</Link>
      </li>
    ));
  }, []);

  return (
    <header className="App-header">
        <ul>
          {MenuItems}
        </ul>
    </header>
  );
}

export default Header;
