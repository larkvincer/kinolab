import React from "react"
import "../css/VisibleMovie.css";

const VisibleMovie = ({
  onDelete,
  _id,
  title,
  release_year,
  format,
  actors
}) => {
  let uniqueId = 0;
  return (
    <article className="VisibleMovie" key={_id}>
      <img src="http://via.placeholder.com/300x400"
        className="image"
        alt={title}
      />
      <div className="description">
        <h2>{title}</h2>
        <div><strong>Realease year:</strong> {release_year}</div>
        <div><strong>Format:</strong> {format}</div>
        <div>
          <strong>Actors:</strong>
          { actors.map(actor => (<span key={uniqueId++}>{actor} </span>)) }
        </div>
        <button onClick={onDelete}>Delete</button>
      </div>
    </article>
  );
};

export default VisibleMovie;