const stateDefault = {
  product: {},
  productCart: [],
};
const ProductsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "PRODUCT_DETAIL": {
      let newState = { ...state, product: action.payload };
      return newState;
    }
    case "ADD_CART": {
      let newProductCart = [...state.productCart];
      let index = newProductCart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (index !== -1) {
        newProductCart[index].soLuong++;
      } else {
        newProductCart.push(action.payload);
      }
      return { ...state, productCart: newProductCart };
    }
    case "DELETE_PRODUCT": {
      let productCartUpdate = [...state.productCart];
      let index = productCartUpdate.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        productCartUpdate.splice(index, 1);
      } else {
        return { ...state, productCart: productCartUpdate };
      }
      return { ...state, productCart: productCartUpdate };
    }
    case "REDUCE_AMOUNT_PRODUCT": {
      let productCartTangGiam = [...state.productCart];
      let index = productCartTangGiam.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        productCartTangGiam[index] = {
          ...productCartTangGiam[index],
          soLuong: action.tangGiam
            ? productCartTangGiam[index].soLuong + 1
            : productCartTangGiam[index].soLuong <= 1
            ? productCartTangGiam[index].soLuong
            : productCartTangGiam[index].soLuong - 1,
        };
      }
      console.log("productCartTangGiam: ", productCartTangGiam);
      return { ...state, productCart: productCartTangGiam };
    }
    default:
      return { ...state };
  }
};
export default ProductsReducer;
