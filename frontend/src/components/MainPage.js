import React, {Component} from "react";
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MainPage extends Component {
  render() {
    return (
      <section className="MainPage">
        <SearchBar />
        <MovieList />
      </section>
    );
  }
}