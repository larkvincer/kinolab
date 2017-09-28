import React from "react";
import { Link } from 'react-router-dom';
import "../css/Header.css";

const Header = () => (
  <header className="Header">
    <Link className="Header__logo" to="/">
      <h1 className="margin_zero">Kinolab</h1>
    </Link>
    <Link to="/movie/add">
      <button>Add movie</button>
    </Link>
    <Link to="/movie/import">
      <button>Import movies</button>
    </Link>
  </header>
);

export default Header;