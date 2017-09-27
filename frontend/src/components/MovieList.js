import React, {Component} from "react";
import MoviePlaceholder from "./MoviePlaceholder";


export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {movies: []};
  }

  componentDidMount() {
    fetch("http://localhost:8080/movie")
    .then(response => response.json())
    .then(data => {this.setState({movies: data})});
  }

  render() {
    return (
      <section>
          {
            this.state.movies.map(el => {
              return <MoviePlaceholder key={el._id} {...el} />;
            })
          }
      </section>
    );
  }
}