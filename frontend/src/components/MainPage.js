import React, {Component} from "react";
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  handleMovieListChange(list) {
    this.setState({
      movies: list
    });
  }

  render() {
    return (
      <section className="MainPage">
        <SearchBar
          onMovieListChange={
            list => { this.handleMovieListChange(list) }
          }
        />
        <MovieList
          onMovieListChange={
            list => { this.handleMovieListChange(list) }
          }
          movies= {this.state.movies}
        />
      </section>
    );
  }
}