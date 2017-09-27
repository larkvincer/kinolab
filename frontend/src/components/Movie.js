import React, {Component} from "react";
import { Redirect } from 'react-router-dom';


export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8080/movie/id/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(data => {this.setState({...this.state, movie: data[0]})})
    .catch(err => {this.setState({...this.state, movie: "ERROR"})});
    console.log(this.props.match.params.id);
  }

  handleDelete() {
    console.log(this.state.movie.id);
    fetch(`http://localhost:8080/movie/${this.state.movie._id}`,
    {method: "delete"})
    .then((response) => response.json())
    .then(data => {
      alert("Movie successfuly deleted");
      this.setState({...this.state, redirect: true});
    })
    .catch(error => {
      alert("Service unavailable!!");
    });
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to="/"/>
    }
    const movie = this.state.movie;
    if(movie) {
      return (
        <article>
          <button onClick={() => {this.handleDelete()}}>Delete</button>
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