import React from "react";
import { Link } from "react-router-dom";
import "../css/MoviePlaceholder.css";

const MoviePlaceholder = ({ _id, title, release_year, format, actors}) => (
  <article className="MoviePlaceholder">
    <img
      src="http://via.placeholder.com/150x200"
      alt={title}
    />
    <Link 
      to={`/movie/id/${_id}`}
      className="MoviePlaceholder__title"
    >
      { 
        title.length > 15 ?
          title.slice(0, 12) + "..."
        : title
      }
    </Link>
    <div><strong>year:</strong> {release_year}</div>
    <div><strong>format:</strong> {format}</div>
  </article>
);

export default MoviePlaceholder;