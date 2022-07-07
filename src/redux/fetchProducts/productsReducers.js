import {
  FETCH_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "./productsType";

const initialState = {
  loading: false,
  error: "",
};

const customersReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...initialState,
        loading: true,
      };

    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        error: "",
      };

    case FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        productsList: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default customersReducers;
