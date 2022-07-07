import React from "react";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";
import "../../css/MoviesSection.css";

function CardContainer() {
  const { productsList } = useOutletContext();

  const productcards = productsList.map((items) => (
    <ProductCard key={items.id} productsList={items} />
  ));

  return <div className="cardContainer">{productcards}</div>;
}
export default CardContainer;
