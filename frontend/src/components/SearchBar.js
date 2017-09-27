import React, {Component} from "react";

export default class SearchBar extends Component {
  handleFormSubmit(event) {
    event.preventDefault();
    const word = event.target.searchWord.value;
    const filter = event.target.searchFilter.value;
    fetch(`http://localhost:8080/movie/${filter}/${word}`)
    .then(response => response.json())
    .then(data => {
      this.props.onMovieListChange(data);
    })
    .catch(error => {
      alert("Some error occurred");
    });
  }

  render() {
    return (
      <form onSubmit={(event) => {this.handleFormSubmit(event)}}>
        <input type="text" name="searchWord" required="true" placeholder="Search" />
        <input type="submit" value="Search" /><br/>
        <input type="radio" name="searchFilter" value="title" defaultChecked={true}/>by title<br/>
        <input type="radio" name="searchFilter" value="actor"/>by actor<br/>
      </form>
    );
  }
}