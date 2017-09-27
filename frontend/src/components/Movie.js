import React, {Component} from "react";


export default class Movie extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch(`http://localhost:8080/movie/id/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(data => {this.setState({movie: data[0]})})
    .catch(err => {this.setState({movie: "ERROR"})});
    console.log(this.props.match.params.id);
  }

  render() {
    const movie = this.state.movie;
    if(movie) {
      return (
        <article>
          <img src="http://via.placeholder.com/300x500" alt={movie.title} />
          <h2>{movie.title}</h2>
          <div><strong>Realease year:</strong> {movie.release_year}</div>
          <div><strong>Format:</strong> {movie.format}</div>
          <div><strong>Actors:</strong> {
            movie.actors.map(actor => (<span>{actor} </span>))
          }</div>
        </article>
      );
    } else {
      return (
        <div>No such film</div>
      );
    }
  }
}