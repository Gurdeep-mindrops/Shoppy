import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/DetailsSection.css";
import Favorite from "./Favorite";
import StarRating from "./StarRating";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { fetchProductsLists } from "../redux/fetchProducts/productsAction";

function DetailsSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setdata] = useState([]);
  const { loading } = useSelector((state) => state);
  let { ProductId } = useParams();

  useEffect(() => {
    const payload = {
      method: "GET",
      url: "v3/get-details",
      params: { usItemId: ProductId },
      onSuccess: (response) => {
        setdata(response);
      },
      type: "withDes",
    };
    dispatch(fetchProductsLists(payload));
  }, []);

  return (
    <div className="MovieDetailsContainer">
      {loading ? (
        <Loader />
      ) : (
        <>
          <img
            className="MovieDetailsImage"
            src={`${data.imageInfo?.allImages[0]?.url}`}
          />
          <div className="MovieDetailsInfo">
            <div className="ProductDetailsNamewithFav">
              <h3>{data.name}</h3>
              <Favorite FavID={data.id} />
            </div>
            <div className="MovieSubDetails">{data.shortDescription}</div>
            <div className="MovieSubDetails">
              {data.priceInfo?.currentPrice?.priceString || "10$"}
            </div>
            <StarRating rating={data.averageRating} numericRating="true" />
            <button>Buy Now</button>
          </div>
        </>
      )}
    </div>
  );
}

export default DetailsSection;
