import React from "react";
import "../css/VisibleAddMovie.css";

const VisibleAddMovie = ({
  onFormSubmit,
}) => (
  <form id="movieForm"
    onSubmit={onFormSubmit}
  >
    <h3>Add movie</h3>
    <input type="text" name="title" required="true" placeholder="Title"/><br/>
    <input type="number" name="release_year"
      placeholder="Realease year"
      min="1900" max="3000"/><br/>
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

export default VisibleAddMovie;