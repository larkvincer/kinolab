import React from "react"

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
    <article key={_id}>
      <button onClick={onDelete}>Delete</button>
      <img src="http://via.placeholder.com/300x500" alt={title} />
      <h2>{title}</h2>
      <div><strong>Realease year:</strong> {release_year}</div>
      <div><strong>Format:</strong> {format}</div>
      <div>
        <strong>Actors:</strong>
        { actors.map(actor => (<span key={uniqueId++}>{actor} </span>)) }
      </div>
    </article>
  );
};

export default VisibleMovie;