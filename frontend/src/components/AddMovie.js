import React, {Component} from "react";
import { Redirect } from 'react-router-dom';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  handleSubmit(event) {
    console.log(event.target.format.value);
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
      alert(response.error);
      this.setState({
        redirect: true
      });
    })
    .catch(error => {
      alert("Error");
    });
    event.preventDefault();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <form id="movieForm"
        onSubmit={(e) => {this.handleSubmit(e)}}
      >
        <h3>Add movie</h3>
        <input type="text" name="title" required="true" placeholder="Title"/><br/>
        <input type="number" name="release_year" placeholder="Realease year"/><br/>
        Format:<select name="format" form="movieForm">
          <option value="VHS">VHS</option>
          <option value="DVD">DVD</option>
          <option value="Blu-Ray">Blu-Ray</option>
        </select><br/>
        Actors: <input type="text" name="actors" require="true"
          placeholder="actor name and surname"
        /><br/>
        <input type="submit" value="Add"/>
      </form>
    );
  }
}