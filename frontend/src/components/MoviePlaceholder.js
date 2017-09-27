import React from "react";
import { Link } from "react-router-dom";
import "../css/MoviePlaceholder.css";

const MoviePlaceholder = ({ _id, title, release_year, format, actors}) => (
  <article class="MoviePlaceholder">
    <img
      src="http://via.placeholder.com/150x200"
      alt={title}
    />
    <Link 
      to={`/movie/id/${_id}`}
      className="MoviePlaceholder__title"
    >
      { title }
    </Link>
    <div><strong>year:</strong> {release_year}</div>
    <div><strong>format:</strong> {format}</div>
  </article>
);

export default MoviePlaceholder;