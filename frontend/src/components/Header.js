import React, {Component} from "react";
import { Link } from 'react-router-dom';
import "../css/Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Link className="Header__logo" to="/">
          <h1 className="margin_zero">Kinolab</h1>
        </Link>
        <Link to="/movie/add">
          <button>Add movie</button>
        </Link>
        <hr/>
      </header>
    );
  }
}