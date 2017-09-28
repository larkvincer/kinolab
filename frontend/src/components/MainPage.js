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

  handleSorting() {
    this.setState({
      movies: this.state.movies.sort((el1, el2) => {
        const title1 = el1.title.toLowerCase(),
          title2 = el2.title.toLowerCase();
        if (title1 < title2) return -1;
        if (title1 > title2) return 1;
        return 0;
      })
    });
  }

  render() {
    return (
      <section className="MainPage">
        <SearchBar
          onMovieListChange={
            list => { this.handleMovieListChange(list) }
          }
          onSorting={ () => this.handleSorting() }
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