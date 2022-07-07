import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsLists } from "../../redux/fetchProducts/productsAction";
import Loader from "../Loader";
import { useParams, Outlet } from "react-router-dom";
import "../../css/MoviesSection.css";

function MoviesSection() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state);
  const [productsList, setproductsList] = useState([]);
  useEffect(() => {
    const payload = {
      method: "GET",
      url: "v2/list",
      params: { cat_id: "0", sort: "best_seller", page: "1" },
      onSuccess: (response) => {
        setproductsList(response);
      },
    };
    dispatch(fetchProductsLists(payload));
  }, []);

  return (
    <div className="MoviesSection">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Outlet context={{ productsList }} />
        </>
      )}
    </div>
  );
}

export default MoviesSection;
