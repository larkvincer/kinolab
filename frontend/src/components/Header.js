import React, {Component} from "react";
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h1>Kinolab</h1>
        </Link>
        <Link to="/movie/add">
          <button>Add movie</button>
        </Link>
        <hr/>
      </header>
    );
  }
}