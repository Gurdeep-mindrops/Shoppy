import {
  FETCH_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "./productsType";
import axios from "axios";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchProductSuccesss = (customersList) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
  };
};
export const fetchProductFailure = (errorMsg) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: errorMsg,
  };
};

export const fetchProductsLists = (payload) => {
  return (dispatch) => {
    const config = {
      method: payload.method,
      url: `https://walmart.p.rapidapi.com/products/${payload.url}`,
      params: { ...payload.params },
      headers: {
        "X-RapidAPI-Key": "0f59755d9bmsh5ab7ae983930af4p1b6cb6jsn557907b33408",
        "X-RapidAPI-Host": "walmart.p.rapidapi.com",
      },
    };
    dispatch(fetchRequest());
    axios(config)
      .then((responce) => {
        const products =
          payload.type == "withDes"
            ? responce.data.data.product
            : responce.data.data.search.searchResult.itemStacks[0].items;
        payload.onSuccess(products);
        dispatch(fetchProductSuccesss());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductFailure(errorMsg));
      });
  };
};
