import React from "react"
import "../css/ImportMovieForm.css";

const ImportMovieForm = ({
  onFormSubmit,
  onInputChange
}) => (
  <form onSubmit={onFormSubmit} className="ImportMovieForm">
    Select file:
    <input type="file" except=".txt"
      required="true" name="file"
      onChange={onInputChange}
    /><br/>
    <input type="submit" value="Import"/>
  </form>
);

export default ImportMovieForm;