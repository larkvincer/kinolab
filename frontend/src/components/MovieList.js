import React, {Component} from "react";
import MoviePlaceholder from "./MoviePlaceholder";
import "../css/MovieList.css";

export default class MovieList extends Component {
  componentDidMount() {
    fetch("http://localhost:8080/movie")
    .then(response => response.json())
    .then(data => {this.props.onMovieListChange(data)});
  }

  render() {
    return (
      <div className="MovieList">
          {
            this.props.movies.map(el => {
              return <MoviePlaceholder key={el._id} {...el} />;
            })
          }
      </div>
    );
  }
}