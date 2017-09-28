import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import VisibleAddMovie from "../components/VisibleAddMovie";

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const data = {
      title: target.title.value,
      release_year: target.release_year.value,
      format: target.format.value,
      actors: target.format.actors
    };
    fetch("http://localhost:8080/movie", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      alert(response.message);
      this.setState({
        redirect: true
      });
    })
    .catch(error => {
      alert("Error");
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <VisibleAddMovie onFormSubmit={(event) => {this.handleSubmit(event)}}/>
    );
  }
}