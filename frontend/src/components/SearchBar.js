import React, {Component} from "react";


export default class SearchBar extends Component {
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Search" />
        <input type="submit" value="Search" /><br/>
        <input type="radio" name="searchFilter" value="byTitle" checked={true}/>by title<br/>
        <input type="radio" name="searchFilter" value="byActor"/>by actor<br/>
      </form>
    );
  }
}