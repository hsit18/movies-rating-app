import React from "react";
import StarRatingComponent from "react-star-rating-component";

import "./style.css";

const MovieCard = ({
  movie: {
    id,
    Title,
    Distributor,
    Release_Date,
    Major_Genre,
    IMDB_Rating,
    IMDB_Votes
  },
  updateRating
}) => {
  const onStarClick = nextValue => {
    updateRating(id, nextValue);
  };

  return (
    <li className="card-wrapper">
      <div className="card-title">
        <h3>{Title}</h3>
        <span>{Release_Date || ""}</span>
      </div>
      <div className="card-body">
        <span>
          <b>Distributor:</b> {Distributor || "-"}
        </span>
        <span className="label">
          <b>Major_Genre:</b> {Major_Genre || "-"}
        </span>
        <span className="label">
          <b>Votes:</b> {IMDB_Votes || "-"}
        </span>
      </div>
      <div className="card-footer">
        <StarRatingComponent
          name="rate1"
          starCount={10}
          value={IMDB_Rating}
          onStarClick={onStarClick}
        />
      </div>
    </li>
  );
};

export default MovieCard;
