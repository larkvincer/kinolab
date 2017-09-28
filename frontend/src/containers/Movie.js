import React, {Component} from "react";
import { Redirect } from 'react-router-dom';
import VisibleMovie from "../components/VisibleMovie";

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
      let uniqueId = 0;
      return (
        <VisibleMovie
          {...movie}
          onDelete={() => {this.handleDelete()}}
        />
      );
    } else {
      return (
        <div>No such film</div>
      );
    }
  }
}