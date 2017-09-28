import React from "react"

const ImportMovieForm = ({
  onFormSubmit,
  onInputChange
}) => (
  <form onSubmit={onFormSubmit}>
    Select file:
    <input type="file" except=".txt"
      required="true" name="file"
      onChange={onInputChange}
    /><br/>
    <input type="submit" value="Import"/>
  </form>
);

export default ImportMovieForm;