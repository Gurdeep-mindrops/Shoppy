import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/MovieCard.css";
import Favorite from "../Favorite";
import StarRating from "../StarRating";

function MovieCard({ productsList }) {
  const navigate = useNavigate();

  return (
    <div className="MovieCard">
      <div className="cardSection1">
        <img
          onClick={() =>
            navigate(`/details/${productsList.name}/${productsList.usItemId}`, {
              state: productsList.usItemId,
            })
          }
          className="MovieImage"
          src={`${productsList.imageInfo.thumbnailUrl}`}
        />
      </div>
      <div className="cardSection2">
        <span
          onClick={() =>
            navigate(`/details/${productsList.name}/${productsList.usItemId}`, {
              state: productsList.usItemId,
            })
          }
          className="MovieName"
        >
          {productsList.name}
        </span>
        <Favorite FavID={productsList.id} />
      </div>
      <div className="cardSection3">
        <span>Price : </span>
        <span>
          {productsList.priceInfo?.currentPrice?.priceString || " 10$"}
        </span>
      </div>
      <StarRating rating={productsList?.averageRating || "4"} />
    </div>
  );
}

export default React.memo(MovieCard);
