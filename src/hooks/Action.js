import {
  ADD_CART,
  DELETE_PRODUCT,
  PRODUCT_DETAIL,
  REDUCE_AMOUNT_PRODUCT,
} from "./Type";

export const actionProductDetail = (payload) => {
  return {
    type: PRODUCT_DETAIL,
    payload,
  };
};
export const actionAddCart = (payload) => {
  return {
    type: ADD_CART,
    payload,
  };
};
export const actionDeleteProduct = (payload) => {
  return {
    type: DELETE_PRODUCT,
    payload,
  };
};
export const actionTangGiamProduct = (payload, tangGiam) => {
  return {
    type: REDUCE_AMOUNT_PRODUCT,
    payload,
    tangGiam,
  };
};
